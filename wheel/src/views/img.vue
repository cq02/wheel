<template>
  <div class="page" @scroll11="scroll" ref="wrap">
    <header>
      <router-link :to="{
                                                                                                     path:'/ColorType',
                                                                                                     query:{id:isd}                       
                                                                                                       }">
        <span>颜色</span>
      </router-link>
      <router-link :to='{
                                                                                                          path:"/CarType",
                                                                                                          query:{id:isd}
                                                                                                           }'>
        <span>车款</span>
      </router-link>
    </header>
    <section ref="section" class="section">
      <div v-for="(item, index) in list" :key="index">
        <li v-for='(value,key) in item.List' :key='key' v-if='key==0' @click='add(item.Id)'>
          <span v-show='img'>{{item.Name}}</span>
          <img :src="value.Url.replace('{0}',value.LowSize)" alt="" v-show='img'>
        </li>
        <li v-for='(value,key) in item.List' :key='key' v-if='key!=0'>
          <img :src="value.Url.replace('{0}',value.LowSize)" alt="">
        </li>
      </div>
      <div class="ind" v-show='isshow' ref='ind' @click="imgClick">
        <img v-for="(item, index) in imgList" :src="`${item.Url.replace('{0}', item.LowSize)}`" :key="index" />
      </div>
    </section>
    <!-- 轮播图片 -->
    <div class="swiper" v-show="showSwiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgList" :key="index" @click="swiperClick">
          <img :src="`${item.Url.replace('{0}', item.HighSize)}`" class="swiper-lazy" />
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <p>{{`${1+current*1}/${imgList.length}`}}</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { debounce } from '../utils/util';
import { lazyload } from '../utils/loayload';
//引入swiper
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  data() {
    return {
      isd: 0,
      isshow: false,
      col: 0,
      img: true
    }
  },
  computed: {
    ...mapState({
      imgList: state => state.img.imgList,
      isFetching: state => state.img.isFetching,
      Page: state => state.img.Page,
      list: state => state.index.allList,
      current: state => state.img.current,
      showSwiper: state => state.img.showSwiper
    }),
    swiperOption() {
      let that = this;
      return {
        on: {
          slideChange: function() {
            if (this.activeIndex > (that.Page - 1) * 30 - 5) {
              that.getImgList({
                SerialID: 2593,
                ImageID: 6
              });
            }
            that.changeSwiper({
              id: this.activeIndex,
              show: true
            })
          },
        },
      }
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.isd = this.$route.query.id
  },
  methods: {
    ...mapActions({
      getImgList: 'img/getCategoryImgList',
      allList: 'index/getAllimg'
    }),
    ...mapMutations({
      changeSwiper: 'img/changeSwiper'
    }),
    // 监听列表滚动
    scroll() {
      let scrollTop = this.$refs.section.scrollTop;
      let height = this.$refs.ind.getBoundingClientRect().height;
      console.log(scrollTop, (height - window.innerHeight));
      if ((scrollTop > ((height - window.innerHeight) - 20)) && !this.isFetching) {
        // 执行加载下一页的逻辑
        console.log('加载下一页');
        this.getImgList({
          SerialID: 2593,
          ImageID: 7
        })
      }
    },
    add(id) {
      this.img = false;
      this.getImgList({
        SerialID: 2593,
        ImageID: id
      });
      this.isshow = true;
      this.isd = id;
    },
    imgClick(e) {
      let id = e.target.dataset.id;
      this.changeSwiper({
        id,
        show: true
      });
      this.swiper.slideTo(id, 1000, false)
    },
    swiperClick(e) {
      console.log(e)
      if (e.target == e.currentTarget) {
        this.changeSwiper({
          show: false
        })
      }
    }
  },
  updated() {
    if (this.Page == 2 && this.imgList.length) {
      lazyload('.ind');
    }
  },
  mounted() {
    this.col = this.$route.query.col; console.log(this.col);
    if (this.col === undefined) {
      this.allList({ isd: this.isd, col: 4219 });
    } else {
      this.allList({ isd: 2593, col: this.col });
    }
    // let func = this.scroll();
    let func = debounce(this.scroll, 100);
    this.$refs.wrap.addEventListener('scroll', func);
  }
}
</script>

<style  scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: .25rem;
}


.actives {
  width: 2.46rem;
  height: 1.64rem;
  background: rgba(0, 0, 0, .8);
  z-index: 999;
}


header {
  width: 100%;
  height: .8rem;
  display: flex;
  align-items: center;
  font-size: .28rem;
  position: fixed;
  top: 0;
  border-bottom: 20px solid #ccc;
  background: #fff;
}

header a {
  flex: 1;
  text-align: center;
  border-right: 1px solid #ccc;
  text-decoration: none;
  color: #000;
}

.ind {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

section {
  margin-top: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: auto;
}

section div {
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  position: relative;
}

section span {
  display: inline-block;
  width: 2.46rem;
  height: 1.64rem;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
  color: #fff;
  text-align: center;
  line-height: 1.64rem;
  z-index: 1000;
  font-size: .35rem;
}

img {
  width: 2.38rem;
  height: 1.64rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0.05rem;
}

.wrap {
  height: 100%;
  overflow-y: scroll;
}

.swiper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper img {
  width: 100%;
  height: 5rem;
  border: none;
}

.swiper p {
  position: absolute;
  bottom: .5rem;
  left: 0;
  color: #fff;
  font-size: .34rem;
  text-align: center;
  width: 100%;
}

.swiper-lazy-preloader {
  color: red;
}
</style>