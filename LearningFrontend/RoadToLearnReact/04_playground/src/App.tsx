import React from 'react'
import { render } from 'react-dom'
import './App.scss'
import * as serviceWorker from './serviceWorker'
import Button from 'reactstrap/lib/Button';

type AppProps = {
    
}

type AppState = {

}

export default class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className="container mt-3">
            <Button color="primary" >
                Yeet
            </Button>
        </div>
    }
}

// render into DOM
render(
    <App />,
    document.getElementById('app'),
)

// register/unregister service worker
serviceWorker.unregister()