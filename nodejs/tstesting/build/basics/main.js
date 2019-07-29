"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeters_1 = require("../stuff/greeters");
async function main() {
    await greeters_1.hello();
    await greeters_1.hi();
}
main().catch((e) => {
    console.log(e.message);
});
