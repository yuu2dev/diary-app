<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />
                <q-toolbar-title></q-toolbar-title>
                <div>v{{ versionRef }}</div>
            </q-toolbar>
        </q-header>
        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <q-item-label header> 일기 목록 </q-item-label>
            </q-list>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
    name: 'MainLayout',
    setup() {
        const leftDrawerOpen = ref(false)
        const linksList = []
        const versionRef = ref(null)
        onMounted(async () => {
            versionRef.value = await window.$electron.getVersion()
        })
        return {
            essentialLinks: linksList,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            },
            versionRef,
        }
    },
})
</script>
