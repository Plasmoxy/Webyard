const puppeteer = require("puppeteer")
require("dotenv").config()

async function getPic() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })
  const page = await browser.newPage()

  // setup interception
  await page.setRequestInterception(true)

  page.on('request', req => {
    if (req.resourceType() === "image") {
      req.abort()
    }
    else {
      req.continue()
    }
  })

  // start processing
  console.log("loading https://gymlipany.edupage.org/")
  await page.goto("https://gymlipany.edupage.org/")
  await page.waitFor(2000)

  console.log("navigating...")
  await page.click('#kids_header > div.l-page-width.clearfix > ul > li.login > a')
  await page.waitFor(3000)
  
  await page.type('#usernameTxt', process.env.gname.toString(), {delay: 10})
  await page.type('#kids_middle_container > div > div > div.skinTemplateMainDiv > div > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input', process.env.gpass.toString(), {delay: 10})

  await page.click("#kids_middle_container > div > div > div.skinTemplateMainDiv > div > form > table > tbody > tr:nth-child(3) > td > input")
  await page.waitFor(2000)

  await page.click(".userHomeWidget.userHomeEtest.wmaxL1.wmaxL2 > div > div.userContentInner > div.buttonsDiv > ul > li.substitution > a")
  await page.waitFor(2000)

  console.log("scraping...")

  const suplo$ = await page.$(".edubarMainNoSkin > div:nth-child(4) > div > div:nth-child(6) > div > div:nth-child(2) > div:nth-child(1) > span")
  const text = await page.evaluate(e => e.textContent, suplo$)
  console.log(text)
  const suplovania = text.split(", ")

  for (let sp of suplovania) {
    console.log(sp)
  }

  await page.waitFor(1000)
  await browser.close()
}

getPic()
