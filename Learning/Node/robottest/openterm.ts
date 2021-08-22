import { typeString, keyTap, keyToggle } from 'robotjs'
import { promisify } from 'util'

const timeout = promisify(setTimeout);

(async () => {
    keyTap("command")
    await timeout(500)
    typeString("terminal")
    await timeout(500)
    keyTap("enter")
    await timeout(1000)

    typeString("du ")
    keyToggle("shift", "down")
    typeString("/")
    keyToggle("shift", "up")
    typeString("\n")

})()
.catch(console.log)