"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const fs = require("fs");
const readFile = util_1.promisify(fs.readFile);
async function main() {
    let f = await readFile("xd.txt", "utf-8");
    console.log(f);
}
main().catch((e) => {
    console.log(e.message);
});
