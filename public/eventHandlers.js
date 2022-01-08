const { ipcMain, app, dialog } = require('electron');

const ipcEventHandlers = (currentWindow) => {
  ipcMain.on("minimize", (evt, arg) => {
    currentWindow.minimize();
  });
  ipcMain.on("un-maximize", (evt, arg) => {
    currentWindow.unmaximize();
  });
  ipcMain.on("maximize", (evt, arg) => {
    currentWindow.maximize();
  });
  ipcMain.on("exit", (evt, arg) => {
    app.quit();
  });
  ipcMain.on("open-file-dialog", async (evt, arg) => {
    const filePaths = await dialog.showOpenDialog({
      properties: ['openDirectory']
    })
    currentWindow.webContents.send('selected-folder', filePaths);
  });
}

const ipcEventTriggers = (currentWindow) => {
  currentWindow.on('maximize', (evt, arg) => {
    currentWindow.webContents.send('maximize-message', {"maximized": true});
  })
  currentWindow.on('unmaximize', (evt, arg) => {
    currentWindow.webContents.send('maximize-message', {"maximized": false});
  })
}

module.exports = { ipcEventHandlers, ipcEventTriggers }