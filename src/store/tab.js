export default {
    state: {
        isCollapse: false, // 侧边栏是否展开属性
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}