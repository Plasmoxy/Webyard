
(async () => {

    // functor = class that behaves as function
    // in js -> the object stays behind the function, we just keep the method by destructuring
    // so this is useful probably when there are mutiple functions needed that manage some background state
    const {count} = new class {
        a = 0
        count = () => this.a++
    }

    // the same thing but using a suspending generator
    // probably most performant but also cancer to program
    const genCount = (function * (){
        let a = 0
        while (true) {
            yield a++
        }
    })()

    // capture a in a closure and the context will be kept
    // this is the simplest solution
    const closureCount = (() => {
        let a = 0
        return () => a++
    })()

    // also destructuring basically allows more functions to be exported from the closure
    // so no need to use a class functor
    // react-hooks probably uses closures, so while all the state is kept in the background
    // the code becomes very clean
    // BUT actually classes in JS are probably just basically closures
    const [clInc, clDec] = (() => {
        let a = 0
        return [
            () => ++a, // increase
            () => --a // decrease
        ]
    })()

    for (let i = 0; i < 10; i++) {
        console.log(`count = ${count()}, genCount = ${genCount.next().value}, closure = ${closureCount()}`)
    }

    // inc background let a by 2, then dec by 1 = the second dec should get 1 (0 + 2 - 1 = 1)
    clInc()
    clInc()
    console.log(clDec())

})()
.catch(console.log)