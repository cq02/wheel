//判断数据为上线数据还是测试数据
let host = /loacalhost/.test(window.location.host) ? 'http://baojia-test.chelun.com' : 'https://baojia.chelun.com';

//封装方法,来进行判断网络
function sendRequest(url, method = 'GET', data = {}) {
    /*如果数据请求为get请求方式*/
    const params = {
            method
        }
        /*如果数据请求方式为post方式，进行判断,带上请求体信息 */
    if (method == 'POST') {
        params.body = JSON.stringify(data)
    }
    /*判断请求查询url是否携带query */
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    }
    /*返回当前的路径*/
    return fetch(host + url, params).then(res => res.json()).then(body => body);
}

/*获取车辆的品牌数据
  @return promise
 */
export let getBransList = () => {
    return sendRequest('/v2-car-getMasterBrandList.html');
};
/*传入id获取每个类型中的内容车型*/
export let MasterBrandId = (id) => {
    return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
};
/**
 * 点击获取某个数据的id 值后转入相应的品牌
 */
export let getCarInfo = (ids) => {
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${ids}`)
};
/*  
 * 获取询问底价的数据
 */
export let getCarid = (id, remo) => {
    return sendRequest(`/v2-dealer-alllist.html?carId=${id}&cityId=${remo}`)
};
//获取城市的列表数据
export let cityList = () => {
    return sendRequest(`/v1-city-alllist.html`)
};
//传入城市的详细数据
export let cityProvin = (id) => {
    return sendRequest(`/v1-city-alllist.html?provinceid=${id}`)
};
//图片的总数据
export let Allimg = (id, isd) => {
    return sendRequest(`/v2-car-getImageList.html?SerialID=${id}&ColorID=${isd}`)
};
/**
 * 获取图片列表的接口
 * @param {*} serialId  车系id
 * @param {*} imgId   图片分类id
 * @param {number} [page=1] 分页页码数
 * @param {number} [pageSize=30] 分页每页数量
 * @param {*} carId  车型id
 * @param {*} colorId 颜色id
 * @returns promise
 */
export let getCategoryImgList = (param) => {
    let search = ``;
    for (let i in param) {
        search += `&${i}=${param[i]}`;
    }
    // 补充page与pageSize
    if (!param['Page']) {
        search += `&Page=1`;
    }
    if (!param['PageSize']) {
        search += `&PageSize=30`;
    }
    return sendRequest(`/v2-car-getCategoryImageList.html?${search.slice(1, search.length)}`);
};
//读取图片的颜色数据
export let Coltype = (id) => {
    return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}