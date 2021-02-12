import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { Gallery, GalleryImage } from './model'
import fs from 'fs'
import { StatusCodes } from 'http-status-codes'

const PORT = 8099
const app = express()
app.use(cors())
app.use(bodyParser.json())

interface DbModel {
  galleries: Gallery[],
  imags: GalleryImage[],
}

const adapter = new FileSync<DbModel>("db.json")
const db = low(adapter)

// dirs
if (!fs.existsSync('images')) fs.mkdirSync('images')
if (!fs.existsSync('thumbs')) fs.mkdirSync('thumbs')

// db defaults
db.defaults({
  galleries: [] as Gallery[],
  images: [] as GalleryImage[],
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
  
  app.post("/gallery", (req, res) => {
    if (!req.body || !req.body.name) {
      res.sendStatus(StatusCodes.BAD_REQUEST)
    }
    else if (!db.get("galleries").find({name: req.body.name}).isEmpty()) {
      res.sendStatus(StatusCodes.CONFLICT)
    }
    else {
      // new gallerry
      const name = req.body?.name ?? "error"
      const newGallery = {
        name,
        path: encodeURI(name),
      }
      db.get("galleries").push(newGallery).write()
      
      res.json(newGallery)
    }
  })
  
}

init().then(() => app.listen(PORT, () => {
  console.log("=== Pmxy Gallery Server ===")
  console.log(`Listening on port ${PORT}`)
}))