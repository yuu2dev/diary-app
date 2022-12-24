<template>
    <q-layout view="lHh lpR lFf">
        <left-drawer />
        <q-page-container>
            <router-view />
        </q-page-container>
        <app-header />
    </q-layout>
</template>
<script>
import { defineComponent } from 'vue'
import AppHeader from 'layouts/AppHeader.vue'
import LeftDrawer from 'layouts/LeftDrawer.vue'
export default defineComponent({
    name: 'AppLayout',
    components: {
        AppHeader,
        LeftDrawer,
    },
})
</script>
