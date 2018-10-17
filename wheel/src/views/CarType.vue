<template>
  <div class="pages">
    <section>
      <!--图片下面的第一个div-->
      <!--时间-->
      <div class="type_c">
        <span v-for='(item,index) in year' :key='index' @click='col(index)' :class="index==ind?'active':''">{{item}}</span>
      </div>
      <div v-for='(value,key) in all' :key='key' class="all">
        <div class="all-item">
          <span>{{key}}</span>
        </div>
        <div class="block-item" v-for='(item,index) in value' :key='index'>
          <span class="name">{{item.market_attribute.year}}款 {{item.car_name}}</span>
          <span class="pei">{{item.horse_power}}马力{{item.gear_num}}档</span>
          <div class="c_pri">
            <span>指导价：{{item.market_attribute.dealer_price_max}}</span>
            <span class="mark">{{item.market_attribute.dealer_price_min}}起</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  name: '',
  data() {
    return {
      id: 0,
      idFor: false
    }
  },
  created() {
    this.id = this.$route.query.id;// 获取到传输过来的id
    /*
    *从vuex中请求数据，并且请求渲染出现
     */
  },
  computed: {
    ...mapState({
      list: state => state.detail.listInfo,
      all: state => state.detail.all,
      year: state => state.detail.years,
      ind: state => state.detail.ind
    })
  },
  methods: {
    ...mapActions({
      ListByIdsync: 'detail/getCarInfo'
    }),
    ...mapMutations({ col: 'detail/col' })
  },
  mounted() {
    this.ListByIdsync(this.id);
  },
}
</script>
<style scoped>
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

#app {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}

.pages {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  overflow: auto;
}

.header {
  width: 100%;
  height: 420px;
}

.header img {
  width: 100%;
  height: 420px;
}

section {
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  height: auto;
  margin-bottom: 1rem;
}

section .top1 {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: .35rem;
  align-items: center;
  background: #fff;
  margin-bottom: .25rem;
}

section .top1 .pri {
  display: flex;
  background: #fff;
  flex-direction: column;
  padding-right: .5rem;
  flex: 1;
}

section .top1 button {
  width: 3.6rem;
  height: .7rem;
  background: #00afff;
  color: #fff;
  font-size: .35rem;
  border: 0;
  border-radius: .1rem;
  margin-left: .3rem;
  padding-right: .5rem;
}

section .top1 .pris {
  font-size: .32rem;
  color: #ff3737;
  background: #fff;
}

section .top1 .pictor {
  color: #c0c0c0;
  font-size: .28rem;
  background: #fff;
}

section .type_c {
  font-size: .35rem;
  width: 100%;
  height: .8rem;
  background: #fff;
  line-height: .8rem;
  display: flex;
}

section .type_c span {
  width: 1.3rem;
  text-align: center;
  display: inline-block;
}

section .all {
  font-size: .35rem;
}

section .all-item {
  height: .7rem;
  line-height: .7rem;
  font-size: .27rem;
  background: #f4f4f4;
  padding-left: .3rem;
  color: #ccc;
}

section .block-item {
  padding-top: .3rem;
  width: 100%;
  height: 1.3rem;
  background: #fff;
  position: relative;
  padding-bottom: .2rem;
  margin-bottom: 6px;
}

section .block-item .name {
  width: 100%;
  display: inline-block;
  line-height: .4rem;
}

section .block-item .pei {
  font-size: .28rem;
  color: #ccc;
  display: inline-block;
  width: 100%;
}

section .block-item .c_pri {
  width: 100%;
  height: .3rem;
  display: flex;
  font-size: .26rem;
  align-items: center;
  justify-content: flex-end;
}

section .block-item .c_pri .mark {
  margin-left: .1rem;
  font-size: .31rem;
  color: #fd4b59;
}

section .btn {
  width: 100%;
  border-top: 1px solid #ccc;
  text-align: center;
  height: .8rem;
  line-height: .8rem;
  background: #fff;
  color: #63bcff;
}

.fixBtn {
  font-size: .35rem;
  position: fixed;
  line-height: .5rem;
  bottom: 0;
  width: 100%;
  background: #63bcff;
  text-align: center;
  color: #fff;
}

.fixBtn h6 {
  background: #63bcff;
  text-align: center;
  color: #fff;
}

.active {
  color: #71c3ff
}
</style>
