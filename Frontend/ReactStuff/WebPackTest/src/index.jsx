import React from 'react'
import ReactDOM from 'react-dom'
import Greeter from './components/Greet';

const title = "Title"

ReactDOM.render(
    <div className="container">
        <div className="text-center">
            <h1>{title}</h1>
        </div>
        <Greeter name="Seb" />

        <button className="btn btn-warning" onClick={() => {alert("Cliccked !")}}>
            Clicc
        </button>
        
    </div>,
    document.getElementById("app")
)

module.hot.accept()