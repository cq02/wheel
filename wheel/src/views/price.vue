<template>
  <div class="page">
    <header>
      <p>可向多个商家咨询最低价，商家及时回复<img src="../static/img/user.png" alt=""></p>
    </header>
    <section>
      <div class="img">
        <dl>
          <dt>
            <img :src="list.details.serial.Picture" alt="">
          </dt>
          <dd>
            <div class="left">
              <p class="left_one">{{list.details.serial.AliasName}}</p>
              <p class="left_two">{{list.details.market_attribute.year}}年{{list.details.car_name}}</p>
            </div>
            <div class="right">></div>
          </dd>
        </dl>

      </div>
      <div class="user">
        <span>个人信息</span>
        <ul class="user_into">
          <li @click='alert'>
            <span>姓名</span><input type="text" placeholder="输入你的真实中文名字">
          </li>
          <li>
            <span>手机</span><input type="text" placeholder="输入你的真实手机号码">
          </li>
          <li @click='city'>
            <span>城市</span><input type="text" placeholder="">
          </li>
          <li class="btn">
            <button>询最低价</button>
          </li>
        </ul>
      </div>
      <div class="pri">
        <span>选择报价经销商</span>
        <ul class="pri_into">
          <li v-for='(item,index) in list.list' :key='index'>
            <div class='read' @click='adds(index)'>
              <span>✔</span>
            </div>
            <div :class="isshow?'add':'read'" @click='adds(index)' v-if='ind.indexOf(index)!=-1'>
              <span>✔</span>
            </div>
            <div>
              <p class="top">{{item.dealerShortName}}</p>
              <p class="pri_col">{{parseInt(item.promotePrice)}}万</p>
            </div>
            <div class="once">
              <p class="top">{{item.address}}</p>
              <p class="top_col">售{{item.saleRange}}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <city v-if='iscity' ref='citys' :id='id' v-on:aa='aa' v-on:cityss='cityss'></city>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { getCarid } from '../api/index';
import city from '../components/city'
export default {
  name: '',
  data() {
    return {
      id: 0,
      isshow: false,
      ind: [],
      ids: 0,
      iscity: false,
      isc: '',
      isAlert: false
    }
  },
  components: {
    city,
    alert
  },
  created() {
    this.id = this.$route.query.id
  },
  computed: {
    ...mapState({
      list: state => state.index.getCarid
      // cityList: state => state.index.getcityList
    })
  },
  methods: {
    ...mapActions({
      getCarids: 'index/getCarids'
      // getcity: 'index/getcity'
    }),
    cityss(into) {
      console.log(into)
    },
    aa(ids) {
      this.iscity = false;
    },
    city() {
      this.iscity = true;
      // this.$refs.citys.style.transform = 'transform: translate3d(0, 0, 0)';
      // this.$refs.citys.style.transition = `all 3s linear`;
    },
    alert() {
      this.isAlert = true;
    },
    adds(ind) {
      let arr = [];
      arr.push(ind);
      //排重
      arr.forEach((item, index) => {
        if (this.ind.indexOf(item) == -1) {
          this.ind.push(ind);
        } else {
          if (this.ind.length == 1) {
            this.ind = [];
          } else {
            this.ind.splice(ind, 1);
          }
          this.isshow = false;
        }
      });
      this.isshow = true;
    }
  },
  mounted() {
    // if (this.isc == false) {
    //   this.iscity = false;
    // }
    // console.log(this.iscity)
    this.getCarids({ id: this.id, remo: '201' });
    // this.getcity()
  }
}
</script>
<style>
body,
html {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  font-size: .35rem;
}

.page {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow-x: hidden;
}

.page header {
  width: 100%;
  height: .6rem;
  line-height: .6rem;
  text-align: center;
  background: #79cd92;
  color: #fff;
}

.page header p {
  font-size: .25rem;
  height: .6rem;
  line-height: .6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

section .img {
  width: 100%;
  align-items: center;
  display: flex;
  font-size: .35rem;
  height: 2rem;
  background: #fff;
}

section .img dl {
  width: 100%;
  align-items: center;
  display: flex;
  font-size: .35rem;
  height: 2rem;
}

section .img dl dt {
  width: 33%;
  height: 183px;
  margin-left: .25rem;
  margin-right: .3rem;
}

section .img dl dt img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}

section .img dl dd {
  flex: 1;
  padding-right: .2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

section .img dl dd .right {
  color: #ccc;
}

section .img dl dd .left {
  line-height: .6rem;
  font-size: .45rem;
}

section .img dl dd .left .left_two {
  font-size: .32rem;
  color: #959595;
}

section .user {
  width: 100%;
  height: 4.9rem;
  display: flex;
  flex-direction: column;
  line-height: .6rem;
  font-size: .25rem;
}

section .user .user_into {
  background: #fff;
  width: 100%;
  font-size: .35rem;
  padding-top: .2rem;
}

section .user .user_into li {
  width: 96%;
  margin: 0 auto;
  height: .8rem;
  line-height: .8rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
  padding: .1rem 0;
}

section .user .user_into li span {
  display: inline-block;
  width: 26%;
  padding-left: .2rem;
}


section .user .user_into li input {
  background: #fff;
  border: 0;
  width: 70%;
  height: .6rem;
  font-size: .34rem;
}

section .user .user_into .btn {
  width: 100%;
  display: flex;
  height: .8rem;
  align-items: center;
  justify-content: space-around;
}

section .user .user_into .btn button {
  width: 77%;
  height: .6rem;
  background: #3aacff;
  color: #fff;
  font-size: .35rem;
  border: 0;
  border-radius: .2rem;
}

section .user span {
  padding-left: .2rem;
}

.pri {
  width: 100%;
  background: #fff;
}

.pri>span {
  width: 100%;
  height: .6rem;
  font-size: .28rem;
  color: #959595;
  display: inline-block;
  background: #eeeeee;
  line-height: .6rem;
}


.pri .pri_into {
  margin: 0 10px;
  margin-left: 1rem;
}

.pri .pri_into li {
  width: 100%;
  height: 2rem;
  line-height: .6rem;
  background: #fff;
  position: relative;
  border-bottom: 3px solid #ccc;
}

.pri .pri_into li div {
  align-items: center;
  justify-content: space-between;
  display: flex;
  font-size: .29rem;
}

.pri .pri_into li div .top {
  width: 70%;
  margin-right: 10px
}

.pri .pri_into li .once .top,
.top_col {
  color: #a2a2a2;
}

.pri .pri_into li .pri_col {
  width: 97px;
  color: #ff7777;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
}

.read {
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  border: 2px solid #ccc;
  position: absolute;
  top: 50%;
  left: -99px;
  margin-top: -.6rem;
  text-align: center;
  color: #fff;
}

.read span {
  width: .5rem;
}

.add {
  width: .5rem;
  text-align: center;
  height: .5rem;
  border-radius: 50%;
  border: 2px solid #ccc;
  position: absolute;
  top: 50%;
  left: -99px;
  margin-top: -.6rem;
  background: #3aacff;
  color: #fff;
  line-height: .5rem;
}

.add span {
  width: .5rem;
}

city {}
</style>
