"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const timeout = util_1.promisify(setTimeout);
function* numcounter() {
    let i = 0;
    while (true)
        yield i++;
}
(async () => {
    let n = numcounter();
    while (true) {
        console.log(n.next().value);
        await timeout(1000);
    }
})().catch(console.log);
