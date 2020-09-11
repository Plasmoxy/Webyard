import React from 'react'
import Button from '@material-ui/core/Button'

interface Props {}

interface State {
    count: number
}

export default class extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        let x = 7

        return <div>
            <p>x a sdasda s= {x + 13}</p>
            <Button variant="contained" color="primary" onClick={this.btnClick.bind(this)}>Count: {this.state.count}</Button>
        </div>
    }

    btnClick() {
        this.setState((state) => ({
            count: this.state.count + 1
        }))
    }
}