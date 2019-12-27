import whyDidYouRender from "@welldone-software/why-did-you-render"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import "./index.scss"
import { Store } from "./model/Store"
import * as serviceWorker from "./serviceWorker"

if (process.env.NODE_ENV !== "production") {
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
