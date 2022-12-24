import { defineStore } from 'pinia'
export const useDiaryStore = defineStore('diary', {
    state: () => ({
        diaries: [],
    }),
    getters: {
        getDiaries: state => state.diaries,
    },
    actions: {},
})
