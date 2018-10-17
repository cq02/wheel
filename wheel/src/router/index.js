import Vue from 'vue';
import Router from 'vue-router';
const Index = () =>
    import ('../views/index.vue');
const Price = () =>
    import ('../views/price.vue');
const detail = () =>
    import ('../views/detail.vue');
const img = () =>
    import ('../views/img.vue');
const ColorType = () =>
    import ('../views/ColorType.vue');
const CarType = () =>
    import ('../views/CarType.vue');
Vue.use(Router);
export default new Router({
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/price',
        name: 'Price',
        component: Price
    }, {
        path: '/detail',
        name: 'detail',
        component: detail
    }, {
        path: '/img',
        name: 'img',
        component: img
    }, {
        path: '/ColorType',
        name: 'ColorType',
        component: ColorType
    }, {
        path: '/CarType',
        name: 'CarType',
        component: CarType
    }, {
        path: '*',
        redirect: '/index'
    }]
})