import express from 'express'
import cors from 'cors'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { Gallery, GalleryImage } from './model'
import fs from 'fs'

const PORT = 8099
const app = express()
app.use(cors())

const adapter = new FileSync("db.json")
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
  
  app.get("/gallery", (req, res) => {
    res.json(db.get("galleries").value())
  })
  
  app.get("/", (req, res) => {
    res.json({status: "OK"})
  })
}

init().then(() => app.listen(PORT, () => {
  console.log("=== Pmxy Gallery Server ===")
  console.log(`Listening on port ${PORT}`)
}))