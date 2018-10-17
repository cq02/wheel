import { getBransList, MasterBrandId, ListById, getCarid, cityList, cityProvin, Allimg, Coltype } from '../../api/index'
const state = {
    list: [], //首页数据
    idlist: [],
    isfor: true,
    ListByIdsync: [],
    getCarid: [],
    getcityList: [],
    cityprivin: [],
    isshow: false,
    allList: [],
    coltype: []
}
const mutations = {
    //读取首页数据
    getApp(state, payload) {
        console.log('payload...', payload);
        state.list = payload;
        state.isfor = false
    },
    //读取品牌数据
    getIdlist(state, payload) {
        // console.log('payload..', payload);
        state.idlist = payload
    },
    //读取底价数据
    getCaridSync(state, payload) {
        // console.log('getCarid...', payload.data);
        state.getCarid = payload.data;
        state.isshow = false;
    },
    //读取城市数据
    getcitySync(state, payload) {
        console.log('city...', payload.data)
        state.getcityList = payload.data
    },
    getprovin(state, payload) {
        // console.log('provin', payload.data)
        state.cityprivin = payload.data
    },
    getAllimg(state, payload) {
        console.log('allcity...', payload)
        state.allList = payload.data
    },
    //获取到城市数据
    getColtype(state, payload) {
        console.log('coltype', payload.data)
        state.coltype = payload.data
    }
}
const actions = {
    getAppAsync({ commit }) {
        //请求首页数据
        getBransList().then(res => {
            let obj = {};
            res.data.forEach(item => {
                if (obj[item.Spelling.slice(0, 1)] == undefined) {
                    obj[item.Spelling.slice(0, 1)] = [];
                    obj[item.Spelling.slice(0, 1)].push(item)
                } else {
                    obj[item.Spelling.slice(0, 1)].push(item)
                }
            })
            commit('getApp', obj)
        })
    },
    //请求品牌数据
    getIdlistAsync({ commit }, payload) {
        MasterBrandId(payload).then(res => {
            commit('getIdlist', res.data)
        })
    },
    getCarids({ commit }, payload) {
        // console.log('payload...', payload)
        getCarid(payload.id, payload.remo).then((res) => {
            commit('getCaridSync', res)
        })

    },
    getcity({ commit }) {
        cityList().then((res) => {
            commit('getcitySync', res)
        })
    },
    getprovin({ commit }, payload) {
        cityProvin(payload).then((res) => {
            commit('getprovin', res)
        })
    },
    getAllimg({ commit }, payload) {
        console.log(payload);
        Allimg(payload.isd, payload.col).then((res) => {
            commit('getAllimg', res)
        })
    },
    //获取到颜色的数据
    getCol({ commit }, payload) {
        Coltype(payload).then(res => {
            commit('getColtype', res)
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}