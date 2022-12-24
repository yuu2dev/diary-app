import { contextBridge, ipcRenderer } from 'electron'
contextBridge.exposeInMainWorld('$electron', {
    async getVersion() {
        return await ipcRenderer.invoke('common:version')
    },
})
