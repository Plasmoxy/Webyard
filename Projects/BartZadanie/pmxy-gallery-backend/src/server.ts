import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { Gallery, GalleryImage, DbModel } from './model'
import fs from 'fs'
import { StatusCodes } from 'http-status-codes'
import multer from 'multer'
import sharp from 'sharp'

// setup
const PORT = 8099
const app = express()
app.use(cors())
app.use(bodyParser.json())

// static dirs
if (!fs.existsSync('images')) fs.mkdirSync('images')
if (!fs.existsSync('thumbs')) fs.mkdirSync('thumbs')
app.use('/images', express.static('images'))
app.use('/thumbs', express.static('thumbs'))

// uploads
const imageUploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.replace('.', `-${Date.now()}.`))
  }
})
const imageUpload = multer({storage: imageUploadStorage})

// db
const adapter = new FileSync<DbModel>("db.json")
const db = low(adapter)

// db defaults
db.defaults({
  galleries: [] as Gallery[]
}).write()

async function init() {
  
  /* Root */
  app.get("/", (req, res) => {
    res.json({status: "OK"})
  })
  
  /* Galleries */
  
  // get galleries just name paths
  app.get("/gallery", (req, res) => {
    res.json(db.get("galleries").map(({name, path, image}) => ({name, path, image})).value())
  })
  
  app.get("/gallery/:path", (req, res) => {
    const gal = db.get("galleries").find({path: req.params.path}).value()
    if (gal) {
      res.json(gal)
    } else {
      res.sendStatus(StatusCodes.NOT_FOUND)
    }
  })
  
  app.post("/gallery", (req, res) => {
    if (!req.body || !req.body.name) {
      res.sendStatus(StatusCodes.BAD_REQUEST)
    }
    // if exits some gallery like this
    else if (db.get("galleries").some({name: req.body.name}).value()) {
      res.sendStatus(StatusCodes.CONFLICT)
    }
    else {
      // new gallerry
      const name = req.body?.name ?? "error"
      const newGallery: Gallery = {
        name,
        path: encodeURI(name),
        image: undefined,
        images: [],
      }
      db.get("galleries").push(newGallery).write()
      
      res.json(newGallery)
    }
  })
  
  app.delete("/gallery/:name", (req, res) => {
    db.get("galleries").remove({name: req.params.name}).write()
    res.sendStatus(StatusCodes.OK)
  })
  
  app.post("/gallery/:galleryName", imageUpload.single('image'), async (req, res) => {
    
    // find gallery
    const targetGallery = db.get("galleries").find({name: req.params.galleryName})
    
    // that gallery was not found
    if (!targetGallery.value()) {
      res.sendStatus(StatusCodes.NOT_FOUND)
      return
    }
    
    // path processing
    const newPath = encodeURI(req.file.filename)
    let originalNameArr = req.file.originalname.split('.')
    originalNameArr.length--;
    const originalName = originalNameArr.join('')
    
    const newImage: GalleryImage = {
      name: originalName,
      path: newPath,
    }
    
    // construct thumbnail
    const resized = await sharp(`images/${newPath}`)
        .resize({width: 300})
        .toFile(`thumbs/${newPath}`)
    
    
    // save to gallery
    targetGallery.get("images").push(newImage).write()
    
    // set gallery image if this one is the first
    if (targetGallery.get("images").size().value() == 1) {
      targetGallery.set("image", newImage).write()
    }
        
    res.json(newImage)
  })
  
  // delete image inside gallery
  app.delete("/gallery/:galleryName/:imageName", (req, res) => {
    // find gallery
    const gal = db.get("galleries").find({name: req.params.galleryName})
    if (!gal.value()) {
      res.sendStatus(StatusCodes.NOT_FOUND)
      return
    }
    
    // find the image inside gallery and delete it
    gal.get("images").remove({name: req.params.imageName}).write()
    
    res.sendStatus(StatusCodes.OK)
  })
  
}

init().then(() => app.listen(PORT, () => {
  console.log("=== Pmxy Gallery Server ===")
  console.log(`Listening on port ${PORT}`)
}))