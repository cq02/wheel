import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyload'
import alert from './components/alert'
// Vue.use(vueLazyload, {
//     loadimg: require('http://img.zcool.cn/community/0132a45975569da8012193a3e6a1e3.gifs')
// })
Vue.prototype.$alert = alert;
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    store,
    router,
    alert,
    render: h => h(App)
})