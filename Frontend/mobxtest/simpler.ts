import { observable, reaction } from 'mobx'

const store = observable({
    a: 0
})

const r = reaction(
    () => store.a,
    (data, reac) => {
        console.log("a changed to " + data)
    }
)

store.a = 4
store.a = 4