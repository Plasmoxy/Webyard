import React from 'react'
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let peopleList = [
    new Person("Seb", 18),
    new Person("Ashley", 13)
]

export default class SimpleComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            people: peopleList
        }
    }
    
    render() {
        return (<div className="card bg-dark text-light m-3 p-2 text-center">
            {this.state.people.map(p => <div key={p.name}>
                {p.name} is {p.age} years old.
            </div>)}
            <div><button type="button" className="btn btn-primary px-4" onClick={() => {
                this.state.people.push(new Person("Jack", 13))
                this.forceUpdate()
            }}>Add</button></div>
        </div>)
    }
}