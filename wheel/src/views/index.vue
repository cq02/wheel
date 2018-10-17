<template>
  <div id="app">
    <loading></loading>
    <div class="app" ref='listgroup'>
      <div class="page">
        <ul>
          <li v-for='(value,key,index) in list' :key='index'>
            <h6 :ref="'A'+index">{{key}}</h6>
            <div v-for='(item,index) in value' :key='index' class="item" @click='clicks(item.MasterID)'>
              <img :src="item.CoverPhoto" alt="">
              <span>{{item.Name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="num">
      <ul v-for='(value,key,index) in list' :key='key' @touchstart='touchstart(index,$event)' @touchmove='touchmove'>
        <h6>{{key}}</h6>
      </ul>
    </div>
    <div class='idlist' ref='makeList' v-show='isshow' @touchstart='numstouchStart' @touchmove='numstouchMove' @touchend='numsEnd'>
      <div class="Left">
        <ul v-for='(item,index) in idlist' :key='index'>
          <h6 class="h6">{{item.GroupName}}</h6>
          <li v-for='(value,key) in item.GroupList' :key='key' class="irems">
            <!--跳入详情页-->
            <router-link :to="{path:'/detail',query:{id:value.SerialID}                                                                                                                                                                              }" class="irems">
              <img :src="value.Picture" alt="">
              <div class="nums" :class="isshow?'active':'num-last'">
                <span class="span">{{value.AliasName}}</span>
                <span class="pri">{{value.DealerPrice}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>···
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import loading from '../components/loading'
import BScroll from 'better-scroll';
import { lazyLoad } from '../utils/loayload';
import { getBransList, MasterBrandId, ListById } from '../api/index'
export default {
  name: '',
  data() {
    return {
      id: 0,
      mak: 0,
      start: 0,
      scroll: '',
      isshow: false,//侧边栏是否发生改变
      offset: 0,
      start: 0
    }
  },
  components: {
    loading
  },
  computed: {
    ...mapState({
      list: state => state.index.list,
      idlist: state => state.index.idlist
    })
  },
  methods: {
    numstouchStart(e) {
      //记录手指的开始位置
      this.start = e.touches[0];
    },
    numstouchMove(e) {
      let touch = e.touches[0];
      let offset = touch.pageX - this.start.pageX;
      console.log('offset...', offset)
      if (offset < 0) {
        offset = 0
      }
      this.offset = offset;
      this.$refs.makeList.style.transform = `translate3d(${offset}px,0,0)`;
      this.$refs.makeList.style.transition = `width`;
    },
    numsEnd() {
      this.$refs.makeList.style.transform = ``;
      this.$refs.makeList.style.transition = ``;
      // 判断滑动距离是否到关闭的临界值
      if (this.offset >= window.innerWidth * 0.35) {
        this.isshow = false
      }
    },
    ...mapActions({
      getAppAsync: 'index/getAppAsync',
      getIdlistAsync: 'index/getIdlistAsync'
    }),
    use() {
      this.scroll = new BScroll(this.$refs.listgroup, {
        click: true
      })
    },
    clicks(index) {
      this.getIdlistAsync(index);
      this.isshow = true;
    },
    touchstart(id, e) {
      this.id = id
      this.start = e.changedTouches[0].clientY
      this.scroll.scrollToElement(this.$refs['A' + id][0])
    },
    touchmove(e) {
      let newID = this.id + parseInt((e.changedTouches[0].clientY - this.start) / e.target.clientHeight)
      if (newID < 0) {
        newID = 0
      }
      if (newID > 20) {
        newID = 20
      }
      this.scroll.scrollToElement(this.$refs['A' + newID][0])
    }
  },
  mounted() {
    this.getAppAsync()
    this.use()
    // lazyLoad('.page')
    // console.log(this.scroll)
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

body,
html {
  width: 100%;
  height: 100%;
}

.irems {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 1.3rem;
  padding: .05rem 0;
  border-bottom: 1px solid #ccc;
  color: #000;
  text-decoration: none;
}

.active {
  transform: translate(0);
  transition: all 3s ease;
}

.num-last {
  transform: translate(100%, 0, 0);
}

.Left .span {
  font-size: .35rem;
  display: inline-block;
}

.irems img {
  margin-right: .3rem;
}

.irems .pri {
  font-size: .24rem;
  color: #ff7777;
  display: block;
}

.irems .nums {
  height: 1.3rem;
  flex: 1;
  line-height: .3rem;
  flex-direction: column;
  align-items: center;
}

#app {
  width: 100%;
  height: 100%;
}

.app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.page {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.BigBox {
  width: 100%;
  height: 100%;
}

ul {
  width: 100%;
  margin: 0 auto;
}

.h6 {
  font-size: .3rem;
  font-weight: normal;
}

h6 {
  width: 100%;
  padding: .12rem .12rem;
  background: #eee;
  font-size: .24rem;
  font-weight: normal;
}

.item {
  width: 90%;
  margin: 0 auto;
  line-height: 1.3rem;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  height: 1.3rem;
  border-bottom: 1px solid #ccc;
}

.item span {
  font-size: .35rem;
}

.item img {
  margin-right: .5rem;
  width: 1rem;
}

.num {
  position: fixed;
  top: 1.2rem;
  right: 0;
  z-index: 999;
}

.num h6 {
  background: #eee;
  font-size: .3rem;
  height: .3rem;
  line-height: .3rem;
  font-weight: normal;
}

.idlist {
  width: 80%;
  height: 100%;
  position: fixed;
  top: 0;
  right: -.5rem;
  background: #fff;
  overflow-y: auto;
  z-index: 9999;
  overflow-x: hidden;
}

.Left {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
}

.Left .span {
  font-size: .35rem;
  display: inline-block;
  line-height: .4rem;
}
</style>