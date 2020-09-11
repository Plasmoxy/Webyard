


export class AsyncInitUser {
  name!: string // definite assigment assertion
  age!: number

  // both async init and builder, can chain directly after constructor
  async init(name: string, age: number) {
    this.name = name
    this.age = age
    return this
  }

  async greet() {
    const {name, age} = this
    console.log("Hello this ist user " + name + " und age ist " + age + ".")
  }

  async grow() {
    this.age++
  }
}