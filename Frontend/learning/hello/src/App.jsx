import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'reactstrap'

class Increaser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 2,
            color: "primary"
        }
    }

    handleClick() {
        this.setState({
            count: this.state.count ** 2,
            color: this.state.color == "primary" ? "danger" : "primary"
        })
        console.log(this.state)
    }

    render() {
        return <Button color={this.state.color} onClick={this.handleClick.bind(this)}>
            {this.state.count}
        </Button>
    }
}

export const App = () => <div className="container pt-2">
    <h1>{Math.random() + 23}</h1>
    <Increaser />
</div>

ReactDOM.render(
    <App />,
    document.getElementById("app")
)

module.hot.accept()