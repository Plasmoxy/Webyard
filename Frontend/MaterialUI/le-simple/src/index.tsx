import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App as ReactApp } from './App';
import * as serviceWorker from './serviceWorker';

import { Plugins, AppUrlOpen } from '@capacitor/core'
const { SplashScreen, App } = Plugins


ReactDOM.render(<ReactApp />, document.getElementById('root'));
SplashScreen.hide()

App.addListener("backButton", (urlopen: AppUrlOpen) => {
    App.exitApp()
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
