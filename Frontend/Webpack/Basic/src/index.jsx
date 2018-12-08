import React from 'react'
import ReactDOM from 'react-dom'

const title = "Minimal React"

class TheButton extends React.Component {
    
    constructor() {
        super()
        this.a = 0
    }
    
    render() {
        return <button onClick={this.handleClick.bind(this)}>
            Hallo - {this.a}
        </button>
    }

    handleClick() {
        this.a += 1
        this.forceUpdate()
    }
}

class CoreComponent extends React.Component {

    render() {
        return <div>
            Hello ! <br/>
            Buttons - <TheButton />
            <TheButton />
            <TheButton />
        </div>
    }
}

ReactDOM.render(
    <CoreComponent/>,
    document.getElementById("app")
)