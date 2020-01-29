import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const devHook = process.env.devHook!!
const sudnyHook = process.env.sudnyHook!!

app.get("/", async (req, res) => {
  res.send("Hooker root yes?")
})

app.get("/relaydev/:msg", async (req, res) => {
  await axios.post(devHook, {
    content: req.params.msg
  })
  res.send("Ok poslal som diky.")
})


app.get("/relay/:msg", async (req, res) => {
  await axios.post(sudnyHook, {
    content: req.params.msg
  })
  res.send("Ok poslal som diky.")
})

app.listen(80, () => console.log("Listening on 80"))