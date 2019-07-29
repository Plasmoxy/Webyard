
type vec2 = [number, number]
type vec3 = [number, number, number]

type State = {
    name?: string,
    age?: number
}

function printState(s: State) {
    console.table(s)
}

// never returns
function xd(): never {
    while(true) {}
}

(async () => {
    
    let boolarr: boolean[] = [true, true, false]
    boolarr[1] = false
    console.table(boolarr)

    const [a, b, c] = boolarr
    console.table([a,b,c])

    const X: vec2 = [1, 2]
    const X2: vec3 = [1, 2, 3]

    console.log(X[0])

    const st: State = {name: "Jack", age: 18}
    printState(st)
    printState({name: "John"})

    
})()
.catch(console.log)