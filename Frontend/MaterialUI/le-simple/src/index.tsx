import { AppUrlOpen, Plugins, Capacitor } from '@capacitor/core';
import { indigo } from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import { App as ReactApp } from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const { SplashScreen, App, StatusBar} = Plugins

console.log("Running platform: " + Capacitor.platform)

if (Capacitor.platform === "android") {
    StatusBar.setBackgroundColor({color: indigo[700]})
}

ReactDOM.render(<ReactApp />, document.getElementById('root'));
SplashScreen.hide()

App.addListener("backButton", (urlopen: AppUrlOpen) => {
    App.exitApp()
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
