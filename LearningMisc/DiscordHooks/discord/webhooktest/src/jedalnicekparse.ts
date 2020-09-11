import axios from "axios"
import cheerio from "cheerio"

export const host = "https://www.eskoly.sk/komenskeho13li"

export type JedalnyDen = {
  den: string,
  datum: string,
  jedla: string[]
}

export async function scrapJedalnicek() {

  const html = await axios.get<string>(host)
  const $ = cheerio.load(html.data)

  const title = $("#ctl00_mainContent_Label2").text()
  const $trows = $("#ctl00_mainContent_tblFoodtable > tbody > tr").has(
    "td[class=dayColumn]"
  )

  let jedalnicek: JedalnyDen[] = []

  $trows.each((i, rowElem) => {
    const dayColumn = rowElem.children.find(
      c => c.attribs?.class === "dayColumn"
    )
    const foodCell = rowElem.children.find(c => c.attribs?.class === "foodCell")

    const den = dayColumn?.children?.find(c => c.type === "text")?.data ?? "chyba"

    const datum = $(dayColumn)
      .find("span")
      .text()

    const jedla = foodCell?.children
      .filter(c => c.type === "text")
      .map(c => c.data ?? "chyba") ?? []

    jedalnicek.push({ den, datum, jedla })
  })

  return jedalnicek
}