<template>
  <div class="film-comments">
    <div class="comment-title">相关评论</div>
    <div class="comment-list">
      <!-- 用户评论 start -->
      <div class="comment-item" v-for="(item, index) in 4" :key="index">
        <div class="user-img">
          <img src="../../public/imgs/users/user1.png" />
        </div>
        <div class="user-info">
          <div class="user-name">
            <span>用户名称</span>
            <div class="film-source">
              <span class="star-img open"></span>
              <span class="star-img open"></span>
              <span class="star-img open"></span>
              <span class="star-img close"></span>
              <span class="star-img close"></span>
              <span class="star-source">7.9</span>
            </div>
          </div>
          <div class="user-time">2018年08月30日11:52:24</div>
        </div>
        <div class="user-conent">
          1.把路易斯、蚁人、钢铁侠、星爵、死侍、蜘蛛侠废除超能力后关在一个房间里，请问谁能活到最后？ 2.最高司令竟然辞职去美国当了FBI探员，叛徒！ 3.斯坦·李今年太惨了，赌博赌到一半赌场被炸了，汽车突然变成了玩具车，开校车遇到UFO，最后还被灭霸一个响指打没了。
          4.李易峰为什么不偷一件蚁人战衣再下船。 【有2个彩蛋，第2个彩蛋和《蜘蛛侠：英雄归来》的第2个彩蛋一样坑爹。】
        </div>
      </div>
      <!-- 用户评论 end -->
    </div>
  </div>
</template>