import { reaction, autorun, observable } from 'mobx'

class Store {

    @observable a = 0
    @observable b = 0

    logger = reaction(
        () => [this.a, this.b],
        (x, r) => {
            console.log("changed -> " + x)
        }
    )
}

const store = new Store()

store.a = 2
store.b = 42