<template>
  <div id="app">
    <nav-bar></nav-bar>
    <!-- 首页正文 start -->
    <div class="content-box">
      <!--
        模块化项目中
        1.页面中使用时：只能使用组件的连字符标签方式
        2.在模块化中使用时：可以直接使用驼峰方式的组件名定义标签
      -->
      <home-page></home-page>
      <!-- <FilmPage></FilmPage>   -->
      <!-- <DetailPage></DetailPage> -->
    </div>
    <!-- <BottomBar></BottomBar> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HomePage from "./views/HomePage.vue";
import FilmPage from "./views/FilmPage";
import DetailPage from "./views/DetailPage";
import BottomBar from "./components/BottomBar"
export default {
  name: "app",
  components: {
    NavBar,
    HomePage,
    FilmPage,
    DetailPage,
    BottomBar
  }
};
</script>
<style lang="less">
@import "./less/var.less";
// 为什么把项目的全局样式定义在app.vue中
// 因为整个项目通过main.js引导，在main.js中通过app.vue，因为整个项目启动时首先为app.vue
*{
    padding: 0px;
    margin: 0px;
    // background-color: @dark;
}
.app{
  *{
    background-color: @light;
  }
}
</style>
<style lang="less" scoped>
@import "./less/var.less";
.app{
    max-width: 750px;
    margin: 0 auto;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: @light;
    overflow: hidden;
}
.content-box{
    background-color: #cccccc;
    position: absolute;
    top: @topHeight;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
}
</style>>

