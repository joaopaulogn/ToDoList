const electron = require('electron');

const { app, BrowserWindow } = electron;

function createWindow() {
    // Creates a navigation window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
          }
    })

    // Loads your application's index.html file.
    win.loadFile('index.html');
}

// When ready will render your window
app.whenReady().then(createWindow);
