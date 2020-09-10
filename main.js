const electron = require('electron');

const { app, BrowserWindow, Tray } = electron;

function createWindow() {
    // References the icon app
    const appIcon = new Tray(__dirname+'/assets/images/icon.png');

    // Creates a navigation window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon: `${__dirname}/assets/images/icon.png`,
    })

    // Remove the default menu
    win.removeMenu();

    // Loads your application's index.html file.
    win.loadFile('index.html');
}

// When ready will render your window
app.whenReady().then(createWindow);
