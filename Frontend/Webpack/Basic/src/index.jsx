import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css' // import bootstrap as css
import { Container, Button, Card } from 'reactstrap' // import shorthand react components
import '../src/style.sass'

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
        return <Container>
            Hello ! <br/>
            Buttons - <TheButton />
            <TheButton />
            <TheButton />

            <Card className="border-primary bg-dark p-5">
                <h1>LOLOLOLO !</h1>
                <Button color="primary" size="lg"> asd</Button><br></br>
                <Button color="primary" size="lg">asddd</Button>
            </Card>


        </Container>
    }
}

ReactDOM.render(
    <CoreComponent />,
    document.getElementById("app")
)