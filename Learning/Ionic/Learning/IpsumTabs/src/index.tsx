import React from 'react'
import ReactDOM from 'react-dom'
import App, { AppState } from './App'
import { cssMediaPrefersDark, cssSetDarkTheme } from './DarkTheme'
import * as serviceWorker from './serviceWorker'
import { setupConfig } from '@ionic/react'

cssSetDarkTheme(cssMediaPrefersDark())

const initState = new AppState()

ReactDOM.render(<App initState={initState} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
