import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import * as serviceWorker from "./serviceWorker"
import "./index.scss"
import { Store } from "./model/Store"
import { Provider } from "react-redux"
import whyDidYouRender from "@welldone-software/why-did-you-render"

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React)
}

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
