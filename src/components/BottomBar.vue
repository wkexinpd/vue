<template>
    <footer class="footer-box">
            <div class="comment-input" @click="flag=true">不想说点什么吗？</div>
            <div v-show="flag" class="comment-detail" @click="flag=false">
                <div class="user-input" @click.stop>
                    <h4>头像</h4>
                    <ul class="user-head" onclick="userChoose(this,event)">
                        <li 
                        v-for="(c,index) in 24" 
                        :key="index" 
                        :class="{'user-choose':`user${c}.png`==userImg}" 
                        :style="`background-image: url(./imgs/users/user${c}.png)`"
                        @click="userImg=`user${c}.png`"
                        >
                        </li>
                    </ul>
                    <h4>昵称</h4>
                    <input class="user-nikename" type="text" placeholder="昵称">
                    <h4>评分</h4>
                    <div class="film-source reset-star">
                        <span class="star-img open"></span>
                        <span class="star-img open"></span>
                        <span class="star-img open"></span>
                        <span class="star-img close"></span>
                        <span class="star-img close"></span>
                        <span class="star-source">7.9</span>
                    </div>
                    <h4>评论</h4>
                    <textarea class="user-message" placeholder="留下点足迹..."></textarea>
                    <div class="send-btn">
                        <span @click="flag=false">关闭</span>
                        <span>发送</span>
                    </div>
                </div>
            </div>
        </footer>
</template>
<script>
export default {
    data(){
        return{
            flag:false,
            userImg:"user1.png"
        }
    }
}
</script>