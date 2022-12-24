import { app, nativeTheme } from 'electron'
import path from 'path'
import fs from 'fs'
import os from 'os'
import * as windowService from './tools/window'
// eslint-disable-next-line no-unused-vars
import('./handlers/common')
let mainWindow
let platform
try {
    // 리눅스에서는 process.platform 이 undefined
    platform = process.platform || os.platform()
    if (platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
        fs.unlinkSync(path.join(app.getPath('userData'), 'DevTools Extensions'))
    }
} catch (e) {
    console.error(e)
}
app.whenReady().then(() => {
    mainWindow = windowService.createWindow()
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    mainWindow.loadURL(process.env.APP_URL)
    if (process.env.DEBUGGING) {
        mainWindow.webContents.openDevTools()
    }
})
app.on('window-all-closed', () => {
    if (platform !== 'darwin') {
        app.quit()
    }
})
app.invoke
app.on('activate', () => {
    if (!mainWindow) {
        return
    }
    mainWindow = windowService.createWindow()
    mainWindow.loadURL(process.env.APP_URL)
    if (process.env.DEBUGGING) {
        mainWindow.webContents.openDevTools()
    }
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})
