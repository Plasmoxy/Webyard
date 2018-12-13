import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/style.sass'

export const Greeter = (p: {name: string}) => (
    <div className="text-warning">
        Hello, {p.name}!
    </div>
)

export class IncreasingButton extends React.Component<{}, {}> {

    count: number = 0

    render() {
        return <button className="btn btn-primary" onClick={this.increase.bind(this)}>
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
    <span className="text-danger">asds</span>

    <div>
        <IncreasingButton />
    </div>
</div>