import React from 'react'
import ReactDOM from 'react-dom'
import Greeter from './components/Greet';

const title = "Title"

ReactDOM.render(
    <div>
        <Greeter name="Seb" />
    </div>,
    document.getElementById("app")
)

module.hot.accept()