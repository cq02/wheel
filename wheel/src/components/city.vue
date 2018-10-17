<template>
  <div class="cityList">
    <p>自动定位</p>
    <li>北京</li>
    <p>省市</p>
    <ul>
      <li v-for='(item,index) in cityList' :key='index' @click='add(item.CityID,item.CityName)'>
        {{item.CityName}}
      </li>
    </ul>
    <div class="mask" v-show='show' @click='ass'>
    </div>
    <div class="part" ref='part' v-show='show'>
      <li v-for='(item,index) in cityprivin' :key='index' @click='remove(item.CityID)'>
        {{item.CityName}}
      </li>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: '',
  data() {
    return {
      show: false
    }
  },
  props: ['id'],
  // updated() {
  //   console.log(this.id)
  // },
  computed: {
    ...mapState({
      cityList: state => state.index.getcityList,
      cityprivin: state => state.index.cityprivin
    })
  },
  methods: {
    ...mapActions({
      getcity: 'index/getcity',
      getCarids: 'index/getCarids',
      getprovin: 'index/getprovin'
    }),
    add(idsn) {
      this.show = true;
      this.getprovin(idsn);
      this.$refs.part.style.transform = 'translate3d(0,0,0)';
      this.$refs.part.style.transition = '';
    },
    ass() {
      this.show = false;
      this.$refs.part.style.transform = 'translate3d(100%,0,0)';
      this.$refs.part.style.transition = 'all 2s ease';
    },
    remove(ids, into) {
      this.show = false;
      this.$emit('aa', this.show);
      this.$emit('cityss', into);// 传入城市名称
      this.getCarids({ id: this.id, remo: ids });
    }
  },
  mounted() {

    this.getcity();
  },
}
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
}

.cityList {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: .339rem;
  background: #fff;
  z-index: 99;
  overflow-x: hidden;
  /* transform: translate3d(0, 100%, 0); */
}

.cityList li {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  border: 1px solid #ccc;
  padding-left: .3rem;
}

.cityList p {
  width: 100%;
  height: .6rem;
  line-height: .6rem;
  background: #eee;
  font-size: .28rem;
  padding-left: .3rem
}

.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.part {
  width: 70%;
  transform: translate3d(100%, 0, 0);
  transition: all 3s ease;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  overflow-y: auto;
}
</style>
