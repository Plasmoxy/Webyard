import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css' // import bootstrap as css
import { Container, Button } from 'reactstrap' // import shorthand react components
import '../src/style.sass'

const title = "Minimal React"

class TheButton extends Button {
    
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
        return <Container>
            Hello ! <br/>
            Buttons - <TheButton />
            <TheButton color="primary" />
            <TheButton />

            <Button color="primary">asd</Button>
        </Container>
    }
}

ReactDOM.render(
    <CoreComponent />,
    document.getElementById("app")
)