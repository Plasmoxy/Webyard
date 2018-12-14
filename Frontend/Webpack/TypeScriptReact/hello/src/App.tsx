import * as React from 'react'
import { Button, Row, Col } from 'reactstrap'
import { add } from './counter'

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


export const PersonGreeter = (props: {name: string, age: number}) => (
    <h1 className="text-danger">
        Hello, I'm {props.name} and I'm {props.age} years old.
    </h1>
)

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

    <PersonGreeter name="Bobi" age={19} />
    <PersonGreeter name="Seb" age={17} />
    <PersonGreeter name="Corentin" age={25} />

    <div className="text-boom">
    we're in slovakia and we're pdartying
    </div>

    {add(1, 2)}




</div>