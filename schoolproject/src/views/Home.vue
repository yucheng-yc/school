<template>
  <div class="home">
    <con></con>
  </div>
</template>

<script>
// 用来测试组件用的
import con from "../views/yc/guidedPage"
export default {
  name: 'home',
  components:{
    con
  }
}
</script>


<style scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
}
</style>
