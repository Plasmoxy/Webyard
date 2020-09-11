import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Greeter from './components/Greeter'
import SimpleComponent from './components/SimpleComponent';

export const App = () => <div className="container pt-2">
    <Greeter name="Seb"/>
    <SimpleComponent />
</div>

ReactDOM.render(
    <App />,
    document.getElementById("app")
)

module.hot.accept()