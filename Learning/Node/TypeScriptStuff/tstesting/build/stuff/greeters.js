"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const timeout = util_1.promisify(setTimeout);
async function hello() {
    console.log("wait....");
    await timeout(1000);
    console.log("HELLO XD");
}
exports.hello = hello;
async function hi() {
    console.log("HI!!");
}
exports.hi = hi;
