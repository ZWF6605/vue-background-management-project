import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab.js'
import user from './user.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        tab,
        user
    }
})
export default store