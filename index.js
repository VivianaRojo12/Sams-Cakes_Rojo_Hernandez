const {app, BrowserWindow} = require('electron')
let win

function createWindow() {
    win = new BrowserWindow({ show: false, width : 500, height : 500 })
    win.once('ready-to-show', () => {
        win.show()
    })
    win.loadFile('index.html')
}

app.on('ready', createWindow)