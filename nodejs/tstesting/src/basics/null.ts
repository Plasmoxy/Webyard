

(async () => {
    
    class Person {
        constructor(
            public name: string,
            public age: number
        ){}
    }
    
    function greet(p?: Person) {
        console.log(`Hello im ${p? p.name : "No name"} and im ${p? p.age : "No age"} yrs old.`)
    }

    const t: Person = new Person("Jack", 13)
    greet(t)

    

})()
.catch(console.log)