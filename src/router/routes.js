const routes = [
    {
        name: 'root',
        path: '/',
        component: () => import('layouts/AppLayout.vue'),
        children: [
            {
                name: 'index',
                path: '',
                component: () => import('pages/IndexPage.vue'),
            },
        ],
    },
    {
        name: 'error-not-found',
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
]
export default routes
