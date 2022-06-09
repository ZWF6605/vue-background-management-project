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
        name: 'Main',
        component: () => import('@/views/Main.vue'),
        redirect:'/login',
        children: [
    //     //    {
    //     //         path: '/home',
    //     //         name: 'home',
    //     //         component: () => import('@/views/Home')
    //     //     },
    //     //     {
    //     //         path: '/user',
    //     //         name: 'user',
    //     //         component: () => import('@/views/User')
    //     //     },
    //     //     {
    //     //         path: '/mall',
    //     //         name: 'mall',
    //     //         component: () => import('@/views/Mall')
    //     //     },
    //     //     {
    //     //         path: '/page1',
    //     //         name: 'page1',
    //     //         component: () => import('@/views/Other/PageOne')
    //     //     },
    //     //     {
    //     //         path: '/page2',
    //     //         name: 'page2',
    //     //         component: () => import('@/views/Other/PageTwo')
    //     //     },
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/Login/Login.vue')
    }

]

const router = new Vuerouter({
    mode: 'history',
    routes,
})

export default router