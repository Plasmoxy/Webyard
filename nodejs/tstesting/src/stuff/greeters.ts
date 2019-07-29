import { promisify } from 'util'
const timeout = promisify(setTimeout)

export async function hello() {
    console.log("wait....")
    await timeout(1000)
    console.log("HELLO XD")
}

export async function hi() {
    console.log("HI!!")
}