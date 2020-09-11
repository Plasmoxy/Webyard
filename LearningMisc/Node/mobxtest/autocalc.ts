import { reaction, computed, observable } from 'mobx'
import { promisify } from 'util'

// nope 

(async () => {

    class ComputingEquation {

        @observable a = 0
        @observable b = 0
        @observable c = 0
        @observable x = 0

        @observable result = 0
    
        computer = reaction(
            () => [this.a, this.b, this.c, this.x],
            ([a,b,c,x], r) => {
                this.result = a*Math.pow(x, 2) + b*x + c
                console.log(`${a}x^2 + ${b}x + ${c} for x=${x} is ${this.result}`)
            }
        )
    
    }
    
    const eq = new ComputingEquation()
    
    eq.x = 2
    eq.a = 1
    eq.b = 20
})()
.catch(console.log)