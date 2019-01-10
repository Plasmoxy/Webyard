import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'

export const App = () => <div className="container pt-2">
    <h1>{Math.random() + 1}</h1>
</div>

ReactDOM.render(
    <App />,
    document.getElementById("app")
)

module.hot.accept()