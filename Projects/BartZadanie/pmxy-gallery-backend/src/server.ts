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
    cb(null, encodeURI(file.originalname.replace('.', `-${Date.now()}.`)))
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
  
  app.get("/gallery", (req, res) => {
    res.json(db.get("galleries").value())
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
  
  app.delete("/gallery/:path", (req, res) => {
    db.get("galleries").remove({path: encodeURI(req.params.path)}).write()
    res.sendStatus(StatusCodes.OK)
  })
  
  
  // images
  app.get("/images", (req, res) => {
    res.json(db.get("images").value())
  })
  
  app.post("/galleryUpload/:galleryPath", imageUpload.single('image'), async (req, res) => {
    
    // find gallery
    const targetGallery = db.get("galleries").find({path: encodeURI(req.params.galleryPath)})
    
    // that gallery was not found
    if (!targetGallery.value()) {
      res.sendStatus(StatusCodes.NOT_FOUND)
      return
    }
    
    // path processing, req.file.filename is processed with formatted URI and date stamp
    const newPath = req.file.filename
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
        
    res.json(newImage)
  })
  
}

init().then(() => app.listen(PORT, () => {
  console.log("=== Pmxy Gallery Server ===")
  console.log(`Listening on port ${PORT}`)
}))