<template>
  <div class="films-box">
    <div class="list-name">
      <span>热门电影</span>
    </div>
    <FilmList class="content-list"></FilmList>
  </div>
</template>
<script>
import FilmList from "../components/FilmList"
export default {
    components:{
        FilmList
    }
}
</script>