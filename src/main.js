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
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn
} from 'element-ui'
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入Vue路由
import router from './router'
import axios from 'axios'
// 引入vuex
import store from '../src/store'
// 引入写好的less样式
import './assets/less/index.less'
// 引入mock
import '../api/mock.js'


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
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.$axios = axios
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')