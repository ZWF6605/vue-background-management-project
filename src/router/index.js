// 引入vue
import Vue from 'vue'
// 引入vue路由
import Vuerouter from 'vue-router'
// 引入路由组件
// import Home from '@/views/Home'

Vue.use(Vuerouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('@/views/User.vue')
    }
]

const router = new Vuerouter({
    mode: 'history',
    routes,
})

export default router