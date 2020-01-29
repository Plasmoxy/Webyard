import axios from "axios"
import cheerio from "cheerio"

const host = "https://www.eskoly.sk/komenskeho13li"

;(async () => {
  console.log("load page " + host)
  const html = await axios.get<string>("https://www.eskoly.sk/komenskeho13li")
  const $ = cheerio.load(html.data)

  const title = $("#ctl00_mainContent_Label2").text()
  const $trows = $("#ctl00_mainContent_tblFoodtable > tbody > tr").has(
    "td[class=dayColumn]"
  )

  let jedalnicek: any[] = []

  $trows.each((i, rowElem) => {
    const dayColumn = rowElem.children.find(
      c => c.attribs?.class === "dayColumn"
    )
    const foodCell = rowElem.children.find(c => c.attribs?.class === "foodCell")

    const den = dayColumn?.children?.find(c => c.type === "text")?.data
    const datum = $(dayColumn)
      .find("span")
      .text()
    const jedla = foodCell?.children
      .filter(c => c.type === "text")
      .map(c => c.data)
    jedalnicek.push({ den, datum, jedla })
  })

  console.log(jedalnicek)
})()
