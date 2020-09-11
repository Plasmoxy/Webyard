import React from 'react';
import "./App.scss"

class Person {
  static lastId = 0
  id: number

  constructor(public name: string, public age: number) {
    Person.lastId++
    this.id = Person.lastId
  }
}

interface Props {

}

interface State {
  list: Person[]
  inputName: string
  inputAge: string
}

export default class extends React.Component<Props, State> {

  constructor(p: Props) {
    super(p)

    this.state = {
      list: [
        new Person("Jack", 16),
        new Person("Andrew", 20)
      ],
      inputName: "",
      inputAge: ""
    }
  }

  render() {
    console.log("Render " + Date.now())
    return <div className="App">
      {
        // list of the persons
        this.state.list.map((item) => <div key={item.id}>
          <span className="highl">{item.name}</span> is {item.age} years old.
          <button onClick={() => this.onDismiss(item.id)}>X</button>
        </div>)
      }

      <div>
        <input type="text" placeholder="Name" onChange={(e) => {
          this.setState({inputName: e.target.value})
        }} value={this.state.inputName} />

        <input type="text" placeholder="Age" onChange={(e) => {
          this.setState({inputAge: e.target.value})
        }} value={this.state.inputAge} />

        <button onClick={() => this.onAdd()}>+</button>
      </div>
    </div>
  }

  onDismiss(targetId: number) {
    this.setState((s) => ({
      list: s.list.filter((item) => item.id !== targetId)
    }))
  }

  onAdd() {
    this.setState((s) => {
      let age = parseInt(s.inputAge)
      let name = s.inputName

      if (name === "") {
        alert("You must enter a name!")
        return
      }
      
      if (isNaN(age)) {
        alert("Age must be a number!")
        return // straight quit setstate arrow and return no change
      }

      // change state
      return {
        list: [...s.list, new Person(s.inputName, age)],
        inputName: "",
        inputAge: ""
      }
    })
  }
}