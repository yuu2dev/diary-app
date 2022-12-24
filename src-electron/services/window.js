import { BrowserWindow } from 'electron'
import path from 'path'
export const createWindow = ({ icon } = {}) => {
    const window = new BrowserWindow({
        icon,
        width: 1000,
        height: 600,
        useContentSize: true,
        show: false,
        webPreferences: {
            /**
             * @memo nodeIntegration
             * node(node.js) 통합 여부.
             */
            nodeIntegration: false,
            /**
             * @memo contextIsolation
             * 분리된 자바스크립트 환경에서 일렉트론 API와 특정 preload 스크립트를 실행시킬지 여부
             */
            contextIsolation: true,
            /**
             * @memo preload
             * 스크립트를 지정하면 페이지 내의 다른 스크립트가 작동하기 전에 로드됩니다.
             * 여기서 지정한 스크립트는 node 통합 활성화 여부에 상관없이 언제나 모든 node API에 접근할 수 있습니다.
             */
            preload: path.resolve(
                __dirname,
                process.env.QUASAR_ELECTRON_PRELOAD,
            ),
        },
    })
    return window
}
