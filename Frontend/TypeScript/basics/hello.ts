
class Person {
    
    constructor(
        private name: string,
        private age: number
    ) {}

    greet() {
        console.log(`Hello I am ${this.name} and I'm ${this.age}.`)
    }
}

function filter<T>(arr: T[], f: (T) => boolean) {
    let a: T[] = []
    arr.forEach((x) => {
        if (f(x)) a.push(x)
    })
    return a
}


let arr = [1, 2, 3]
let filtered = filter(arr, (t) => t>2)
console.log(filtered)