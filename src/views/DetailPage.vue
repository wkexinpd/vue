<template>
    <div class="content-box">
            <!-- 电影详情 start -->
            <div class="detail-box">
                <!-- 电影名称 -->
                <div class="film-name">蚁人2：黄蜂女现身</div>
                <!-- 电影信息 stat-->
                <div class="film-info">
                    <div class="film-tip">
                        <div class="comment-count">
                            <div class="film-source">
                                <span class="star-img open"></span>
                                <span class="star-img open"></span>
                                <span class="star-img open"></span>
                                <span class="star-img close"></span>
                                <span class="star-img close"></span>
                                <span class="star-source">7.9</span>
                            </div>
                            <div class="star-count">93601短评</div>
                        </div>
                        <div class="film-desc">
                            <p>
                                <span>上映时间:</span>2018</p>
                            <p>
                                <span>电影类型:</span>动作 / 科幻 / 冒险</p>
                            <p>
                                <span>参演明星:</span>佩顿·里德(导演) / 保罗·路德 / 伊万杰琳·莉莉 / 迈克尔·佩纳 </p>
                        </div>
                    </div>
                    <div class="film-img" style="background-image: url(./imgs/film.jpg)"></div>
                </div>
                <!-- 电影信息 end-->
                <!-- 电影简介 start -->
                <div class="film-plot">
                    <div class="plot-title">剧情简介</div>
                    <div class="plot-content">来自漫威电影宇宙的新片《蚁人2：黄蜂女现身》重点展现了两位超级英雄令人惊叹的收缩能力。继《美国队长3》的故事线之后，斯科特·朗迎来了自己作为超级英雄和孩子父亲的双重身份。一方面，他在背负着蚁人职责的同时努力过好自己的生活；另一方面，二代黄蜂女霍普·凡·戴恩和汉克·皮姆博士又向他传达了一项紧迫的新任务。斯科特必须再次穿上战衣，与黄蜂女并肩作战，共同破解来自过去的谜题。</div>
                </div>
                <!-- 电影简介 end -->
                <!-- 演员阵容 start -->
                <div class="film-actor">
                    <div class="actor-title">导演演员</div>
                    <div class="actor-list">
                        <div class="actor-item"  v-for="(item, index) in 8" :key="index">
                            <div class="actor-img" style="background-image: url(./imgs/actor.jpg)"></div>
                            <div class="actor-name">保罗·路德asdadasdasds</div>
                        </div>
                    </div>
                </div>
                <!-- 演员阵容 end -->
                <!-- 电影评论 start -->
                <CommentList></CommentList>
                <!-- 电影评论 end -->
            </div>
            <!-- 电影详情 end -->
        </div>
</template>
<script>
import CommentList from "../components/CommentList"
export default {
    components:{
        CommentList
    }
}
</script>