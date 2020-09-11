import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css' // import bootstrap as css
import { Container, Button, Card, Row, Col } from 'reactstrap' // import shorthand react components
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import '../src/style.sass'
import TheButton from './TheButton.jsx'
import TheTable from './TheTable.jsx'

const title = "Minimal React"

class CoreComponent extends React.Component {

    render() {
        return <Container>
            Hello ! <br/>
            Buttons - <TheButton />
            <TheButton />
            <TheButton />
            
            <TheTable />
            
        </Container>
    }
}

ReactDOM.render(
    <CoreComponent />,
    document.getElementById("app")
)