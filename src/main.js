import Vue from 'vue'
import App from './App.vue'
// 按需引入element-ui组件库
import {
  Button,
  Radio,
  Container,
  Main,
  Aside,
  Header,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入Vue路由
import router from './router'

// 关闭Vue生产提示
Vue.config.productionTip = false
// 应用elementui插件
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')