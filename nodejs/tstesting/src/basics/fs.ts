import { promisify } from 'util'
import * as fs from 'fs'
const readFile = promisify(fs.readFile)

async function main() {
    let f = await readFile("xd.txt", "utf-8")
    console.log(f)
}

main().catch((e: Error) => {
    console.log(e.message)
})