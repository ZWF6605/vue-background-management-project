import Cookie from "js-cookie"
// import router from "@/router"
export default {
    state: {
        isCollapse: false, // 侧边栏是否展开属性
        tabsList: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }],
        currentMenu: null,
        manu: []
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                } else {
                    state.currentMenu = null
                }
            }
        },
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        },
        // 动态路由
        setMenu(state, val) {
            state.manu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            // 判断是否有children，并给每个路由添加component属性
            menu.forEach(item => {
                if (item.children) {
                    console.log(item);
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    console.log(item);
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });

            // console.log(menuArray);
            // 路由的动态添加
            menuArray.forEach(item => {
                router.addRoute("Main", item)
            })
        }
    }
}