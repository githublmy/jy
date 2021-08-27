<template>
  <div class="baishou box">
    <div class="info">
      <h4>游戏介绍</h4>
      <p>
        放下手机，活动活动身体，感受与众不同的动物领舞者给你的全新体验。
        看呆萌的企鹅、憨厚的北极熊、深藏不露的海豹，还有轻灵跃动的北极狐为你展现的冰雪舞团。
      </p>
    </div>
    <div class="video">
      <h4>相关视频</h4>
      <div class="v">
        <div class="video-lin">
          <router-link class="vi-a" @click.native="dialogTableVisible = true" to="">
            <i class="el-icon-video-play v-i"></i>
            <img src="../../assets/baishou/baishou.jpg" />
          </router-link>
        </div>
        <el-dialog
          style="width: 100%; box-sizing: border-box"
          v-if="dialogTableVisible"
          :visible.sync="dialogTableVisible"
          :destroy-on-close="true"
        >
          <!-- <video src="../../assets/baishou/baishou.mp4" width="100%" autoplay controls>
            <source src="../../assets/baishou/baishou.mp4" type="video/mp4" />
          </video> -->
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      dialogTableVisible: false,
    }
  }
}
</script>
<style scoped>
.baishou {
  height: 800px;
  padding-top: 10px;
}
.video {
  padding: 0 20px;
}
.video h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
.video-lin .vi-a .v-i {
  font-size: 80px;
  width: 80px;
  height: 80px;
  color: #cfcac2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}
/* 图标动画 */
.video-lin:hover .v-i {
  animation: tubiao 1.2s infinite;
}
@keyframes tubiao {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
