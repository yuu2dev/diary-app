import { ipcMain } from 'electron'
ipcMain.handle('common:version', () => {
    return process.env.npm_package_version
})
