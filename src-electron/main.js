import { app, nativeTheme, nativeImage } from 'electron'
import path from 'path'
import fs from 'fs'
import os from 'os'
import * as windowService from './services/window'
// eslint-disable-next-line no-unused-vars
import('./handlers/common')
let mainWindow, authWindow
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
const renderMainWindow = () => {
    const icon = path.resolve(
        __dirname,
        process.env.QUASAR_PUBLIC_FOLDER,
        'favicon.png',
    )
    // 메인 윈도우
    mainWindow = windowService.createWindow({ icon })
    mainWindow.webContents.on('dom-ready', () => {
        mainWindow.show()
    })
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    mainWindow.loadURL(process.env.APP_URL)
    if (process.env.DEBUGGING) {
        mainWindow.webContents.openDevTools()
    }
    // 앱 dock 아이콘 설정
    const image = nativeImage.createFromPath(icon)
    app.dock.setIcon(image)
}
const renderAuthWindow = () => {
    // 인증 모달
    authWindow = windowService.createWindow({
        height: 300,
        width: 600,
        modal: true,
        parent: mainWindow,
    })
    authWindow.loadFile(
        path.resolve(__dirname, process.env.QUASAR_PUBLIC_FOLDER, 'auth.html'),
    )
    // authWindow.show()
}
app.whenReady().then(() => {
    renderMainWindow()
    renderAuthWindow()
})
app.on('window-all-closed', () => {
    if (platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (mainWindow) {
        return
    }
    renderMainWindow()
})
