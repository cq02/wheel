<template>
  <div class="img" v-show='isfor'>
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539098661967&di=007c123e973df390cad7bbd3b0904d9c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cddc57a93f670000018c1bff1e12.gif" alt="">
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: '',
  computed: {
    ...mapState({
      isfor: state => state.index.isfor
    })
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.img {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #222222;
  z-index: 99999;
}

.img img {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -400px;
  margin-top: -240px;
}
</style>
