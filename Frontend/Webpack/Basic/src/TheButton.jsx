import React from 'react'

export default class TheButton extends React.Component {
    
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