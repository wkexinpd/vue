<template>
  <div class="home-box">
    <!-- 首页分类列表 start -->
    <div v-for="(item,index) in 3" :key="index">
      <div class="list-name">
        <span>热门电影</span>
        <span class="list-more">更多 ></span>
      </div>
      <FilmList  class="list-content"></FilmList>
    </div>
    <!-- 首页分类列表 end -->
  </div>
</template>
<script>
import FilmList from "../components/FilmList";
export default {
  data() {
    return {
    };
  },
  components: {
    FilmList
  },
  methods: {
    changePage(arg) {
      this.$emit("change-page", arg);
    }
  }
  // mounted() {
  //     console.log(this);
  // },
};
</script>