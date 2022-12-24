<template>
    <q-header bordered class="diary-theme-1">
        <q-toolbar>
            <q-btn
                flat
                dense
                round
                color="white"
                icon="menu"
                aria-label="Menu"
                @click="toggleLeftDrawer"
            />
            <q-toolbar-title></q-toolbar-title>
            <div class="text-h4">v{{ version }}</div>
        </q-toolbar>
    </q-header>
</template>
<script>
import { useDrawerStore } from 'src/stores/drawer-store'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
    name: 'AppHeader',
    setup() {
        const { toggleLeftDrawer } = useDrawerStore()
        const version = ref(null)
        onMounted(async () => {
            version.value = await window.$electron.getVersion()
        })
        return {
            version,
            toggleLeftDrawer,
        }
    },
})
</script>
