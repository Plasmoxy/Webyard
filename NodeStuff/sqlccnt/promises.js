
const f = async ms => new Promise(resolve => setTimeout(resolve, ms))

async function main() {
    console.log(await f(1000))
    console.log("main done")
}



main()