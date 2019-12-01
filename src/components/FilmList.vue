<template>
  <div>
    <!-- 电影展示组件 start -->
    <div class="film-item" v-for="(item,index) in 3" :key="index">
      <div class="film-img" style="background-image: url(./imgs/film.jpg)"></div>
      <div class="film-title">蚁人2：黄蜂女现身</div>
      <div class="film-source">
        <span class="star-img open"></span>
        <span class="star-img open"></span>
        <span class="star-img open"></span>
        <span class="star-img close"></span>
        <span class="star-img close"></span>
        <span class="star-source">7.9</span>
      </div>
    </div>
  </div>
    <!-- 电影展示组件 end -->
</template>