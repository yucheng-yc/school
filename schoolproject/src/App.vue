<template>
  <div id="app">
    <router-view class="contentPage"/>
  </div>
</template>

<style scoped>
#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: orange;
}
.contentPage {
  /* 页面宽度为 */
  width: 1258px;
  margin: auto;
}
</style>
