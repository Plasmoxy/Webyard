
// now we can import everything right from the barrel
import {Dog, Human, Cat} from './barrel'

(async () => {
    
    const dog = new Dog("Ass")
    const cat = new Cat("Mike", "meat")
    const human = new Human("Jack", 18)

    console.table([
        dog, cat, human
    ])
    
})()
.catch(console.log)