/*
 * Capacitor config modifier by Plasmoxy
 */

const fs = require('fs')

const CFG_FILE = "capacitor.config.json"
const serverconfig = {
    url: "http://192.168.0.169:3000",
    hostname: "app",
    iosScheme: "ionic",
    androidScheme: "http",
    allowNavigation: ["192.168.*.*"]
}
const mode = process.argv[2]

let capconfig = JSON.parse(fs.readFileSync(CFG_FILE))


if (mode == "dev") {
    capconfig.server = serverconfig
} else if (mode == "prod") {
    delete capconfig.server
} else {
    console.log("Unknown argument, args: dev, prod")
    process.exit(0)
}

const outstring = JSON.stringify(capconfig, null, 2)
console.log(capconfig)

fs.writeFileSync(CFG_FILE, outstring)

console.log("\n== Config modified ==")