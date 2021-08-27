
timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

async function main() {
    await timeout(1000)
    console.log("xd")
}
main()
