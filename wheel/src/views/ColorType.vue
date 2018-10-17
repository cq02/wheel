<template>
  <div class="pages">
    <div class="header">
      全部颜色
    </div>
    <div class="nav">
      <ul>
        <li v-for='(item,index) in list' :key='index' @click='click(index)' :class='index==ids?"active":""'>
          {{index}}
        </li>
      </ul>
      <ol v-for='(item,index) in list' :key='index' v-if='index==ids' v-show='isshow'>
        <li v-for='(value,key) in item' :key='key' @click='add(value.ColorId)'>
          <span :style='{background:value.Value}'></span>
          <span>{{value.Name}} </span>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: '',
  data() {
    return {
      id: 0,
      ids: 2009,
      isshow: false,
      ide: 1,
      col: 0
    }
  },
  computed: {
    ...mapState({
      list: state => state.index.coltype
    })
  },
  created() {
    this.id = this.$route.query.id;
  },
  methods: {
    ...mapActions({
      getColtype: 'index/getCol',
      getImgList: 'index/getAllimg'
    }),
    click(ids) {
      this.isshow = true
      this.ids = ids
      console.log(ids)
    },
    add(is) {
      this.col = is; console.log(is)
      this.isshow = false;
      this.ide = 0;
      this.$router.push({
        path: '/img', query: {
          col: is
        }
      })
      this.getImgList({
        isd: this.id,
        col: this.col
      });
    }
  },
  mounted() {
    // this.getImgList({
    //   SerialID: 2593,
    //   ImageID: 7
    // })
    console.log(this.id)
    this.getColtype(this.id)
  }
}
</script>
<style>
.pages {
  width: 100%;
  height: 100%;
  font-size: .35rem;
  background: #f4f4f4;
}

.header {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #3aacff;
  background: #fff;
  border-top: .3rem solid #f4f4f4;
}

.nav {
  width: 100%;
  overflow-x: hidden;
  align-items: center;
  background: #fff;
  margin-top: .2rem;
}

.active {
  color: #3aacff;
}

.nav>ul {
  display: flex;
  overflow-x: auto;
  height: 1rem;
  align-items: center;
}

.nav>ul>li {
  width: 1.3rem;
  flex-shrink: 0;
  text-align: center;
}

.nav>ol {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.nav ol li {
  width: 40%;
  margin: .05rem 3%;
  line-height: 1rem;
  border: 1px solid #3aacff;
  border-radius: .2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav ol li span:nth-child(1) {
  display: inline-block;
  height: .5rem;
  width: .5rem;
  margin-right: .05rem;
}
</style>
