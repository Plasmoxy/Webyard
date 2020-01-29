import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import { scrapJedalnicek, JedalnyDen } from './jedalnicekparse'
dotenv.config()

const app = express()
const devHook = process.env.devHook!!
const sudnyHook = process.env.sudnyHook!!
const jedloHook = process.env.jedloHook!!

let jedloInterval: NodeJS.Timeout
let jedloLastUpdate = new Date(0)

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

app.listen(80, async () => {
  console.log("Hooker listening on 80...")

  // 10 sekundovy checker co meria dni
  jedloInterval = setInterval( () => {
    let current = new Date()
    const diffTime = Math.abs(current.getTime() - jedloLastUpdate.getTime())
    const diffDays = (diffTime / (1000 * 60 * 60 * 24))

    if (diffDays >= 1) {
      console.log("ONE DAY HAS PASSED -> sending food.")
      jedloLastUpdate = current
      postJedalnicek()
    }
  }, 1000)
})

async function postJedalnicek() {
  const jdl = await scrapJedalnicek()
  
  const day = (new Date()).getDay()
  const jDen: JedalnyDen | undefined = jdl[day-1]
  
  if (jDen) {

    // search images
    //const imgs: any = (await axios.get(encodeURI(`https://serpapi.com/search?q=${jDen.jedla[0]}&tbm=isch&ijn=0`))).data
    //console.log(imgs?.images_results[0]?.original)

    await axios.post(jedloHook, {
      username: "DOBRU CHUC!",
      content: "===== Obed dnes (" + jDen.den + " - " + jDen.datum + ") =====\n" + jDen.jedla.reduce((a, x) => a + x + "\n","") + "==========================\n",
      //embeds: [
      //  { "image": { "url": "https://www.osviezovace.sk/wp-content/uploads/Red_Apple.jpg"}}
      //]
    })
  }
}