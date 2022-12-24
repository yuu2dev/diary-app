import { ipcMain } from 'electron'
ipcMain.handle('common:version', () => {
    return process.env.APP_VERSION
})
