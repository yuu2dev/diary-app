<template>
    <q-drawer class="diary-theme-2" v-model="leftDrawer" show-if-above bordered>
        <q-list>
            <q-item-label header class="text-h6"> 일기 목록 </q-item-label>
        </q-list>
    </q-drawer>
</template>
<script>
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { useDrawerStore } from 'src/stores/drawer-store'
export default defineComponent({
    setup() {
        const drawerStore = useDrawerStore()
        const { leftDrawer } = storeToRefs(drawerStore)
        return {
            leftDrawer,
        }
    },
})
</script>
