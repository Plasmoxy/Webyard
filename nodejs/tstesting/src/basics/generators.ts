import { promisify } from 'util'
const timeout = promisify(setTimeout)

function * numcounter() {
    let i = 0
    while (true) yield i++
}


(async () => {
    let n = numcounter()
    while (true) {
        console.log(n.next().value)
        await timeout(1000)
    }
})
().catch(console.log)