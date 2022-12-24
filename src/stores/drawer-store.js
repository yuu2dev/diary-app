import { defineStore } from 'pinia'
export const useDrawerStore = defineStore('diary', {
    state: () => ({
        leftDrawer: false,
    }),
    getters: {
        getLeftDrawer: state => state.leftDrawer,
    },
    actions: {
        toggleLeftDrawer() {
            this.leftDrawer = !this.leftDrawer
        },
    },
})
