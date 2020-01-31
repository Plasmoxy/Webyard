import { JedalnyDen, scrapJedalnicek } from "./jedalnicekparse"
import Axios from "axios"
import dotenv from 'dotenv'
dotenv.config()

const jedloHook = process.env.jedloHook!!
const notifyRoleId = "672490037136588828"

export async function postJedalnicek() {
  const jdl = await scrapJedalnicek()
  
  const day = (new Date()).getDay()
  const jDen: JedalnyDen | undefined = jdl[day-1]
  
  if (jDen) {

    // search images
    //const imgs: any = (await axios.get(encodeURI(`https://serpapi.com/search?q=${jDen.jedla[0]}&tbm=isch&ijn=0`))).data
    //console.log(imgs?.images_results[0]?.original)

    await Axios.post(jedloHook, {
      username: "Obed dnes (" + jDen.den + " - " + jDen.datum + ")",
      content: jDen.jedla.reduce((a, x) => a + x + "\n","")
           + "<@&" + notifyRoleId + ">",
      //embeds: [
      //  { "image": { "url": "https://www.osviezovace.sk/wp-content/uploads/Red_Apple.jpg"}}
      //]
    })
  }
}