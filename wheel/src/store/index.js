import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import index from './modules/index'
import Logger from 'vuex/dist/logger'
import detail from './modules/detail.js'
import img from './modules/img'
//引入modules的路径
export default new Vuex.Store({
    modules: {
        index,
        detail,
        img
    },
    plugins: [Logger()]
})