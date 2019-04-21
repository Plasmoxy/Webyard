const { app, BrowserWindow } = require('electron')

let win

app.on('ready', () => {
    win = new BrowserWindow({ width: 600, height: 300 })
    win.setMenu(null)
    win.loadFile('build/index.html')
})