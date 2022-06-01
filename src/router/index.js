// 引入vue
import Vue from 'vue'
// 引入vue路由
import Vuerouter from 'vue-router'
// 引入路由组件
// import Home from '@/views/Home'

Vue.use(Vuerouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main.vue'),
        children: [{
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('@/views/User')
            }
        ]
    },

]

const router = new Vuerouter({
    mode: 'history',
    routes,
})

export default router