import { getCarInfo } from '@/api/';
import { mergeCar, sortCar, filter } from '../../utils/index';
const state = {
    listInfo: [],
    all: [],
    years: [],
    ind: 0
}
const mutations = {
    //数据处理
    updaCarList(state, payload) {
        state.listInfo = payload;
        state.all = mergeCar(sortCar(payload.list));
        console.log('all...', mergeCar(sortCar(payload.list)));
        let allyear = [];
        //年份进行排重
        let year = ['全部']
        payload.list.forEach((item, index) => {
            allyear.push(item.market_attribute.year)
        });
        let set = new Set(allyear);
        year.push(...[...set]);
        state.years = year;
    },
    //点击切换年份
    col(state, payload) {
        state.ind = payload
        if (!isNaN(Number(state.years[payload]))) {
            console.log(Number(state.years[payload]))
            state.all = mergeCar(sortCar(filter(Number(state.years[payload]), state.listInfo.list)))
            console.log('year..', state.all)
        } else {
            state.all = mergeCar(sortCar(state.listInfo.list));
        }
    }
}
const actions = {
    getCarInfo({ commit }, payload) {
        getCarInfo(payload).then(res => {
            commit('updaCarList', res.data)
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}