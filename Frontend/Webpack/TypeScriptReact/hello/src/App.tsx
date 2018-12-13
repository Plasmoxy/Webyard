import * as React from 'react'
import { Button, Row, Col } from 'reactstrap'

export const Greeter = (p: {name: string}) => (
    <div className="text-warning">
        Hello, {p.name}!
    </div>
)

export class IncreasingButton extends React.Component {

    count: number = 0

    render() {
        return <button className="btn btn-primary w-100" onClick={this.increase.bind(this)}>
            count = {this.count}
        </button>
    }

    increase() {
        this.count += 1
        this.forceUpdate()
    }

}

export default () => <div className="container">
    <h1> Greeter </h1>
    <Greeter name="Sebo" />
    <Greeter name="Filip" />
    <span className="text-boom">asds</span>

    <Row>
        <Col><IncreasingButton /></Col>
        <Col><IncreasingButton /></Col>
        <Col><IncreasingButton /></Col>
    </Row>
</div>