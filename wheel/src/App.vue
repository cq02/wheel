<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getBransList, MasterBrandId, ListById } from './api/index';
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  // mounted() {
  //   /*输出的内容为第一页数据，所有的车型 */
  //   getBransList().then(res => {
  //     console.log(res);
  //   });
  //   /*输出的数据为点击之后相对应的内容车型 */
  //   MasterBrandId(9).then(res => {
  //     console.log(res)
  //   });

  //   ListById(2593).then(res => {
  //     console.log(res)
  //   })
  // },
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

#app {
  width: 100%;
  height: 100%;
}
</style>
