import React from 'react'
import { render } from 'react-dom'
import './App.scss'
import NotesComponent from './NotesComponent';

interface AppProps {
    
}

interface AppState {

}

export default class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className="container mt-3">
            <NotesComponent />
        </div>
    }
}


render(
    <App />,
    document.getElementById('app'),
)