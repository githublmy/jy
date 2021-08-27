<template>
  <div class="seabed box">
    <div class="info">
      <h4>游戏介绍</h4>
      <p>
        品味充满未知的海底，一次漫步海底的体验。颜色绚丽的珊瑚礁，舞动盘旋的鱼群，还有凶残的鲨鱼在暗处伺机而动，这里的全部都是为了呈现最真实的海底。
      </p>
    </div>
    <div class="imgs">
      <h4>相关图片</h4>
      <el-image :src="imgUrl" :preview-src-list="srcList"> </el-image>
    </div>
    <div class="video">
      <h4>相关视频</h4>
      <div class="v">
        <div class="video-lin">
          <router-link class="vi-a" @click.native="dialogTableVisible = true" to="">
            <i class="el-icon-video-play v-i"></i>
            <img src="../../assets/haidi/haidi.png" />
          </router-link>
        </div>
        <el-dialog
          style="width: 100%; box-sizing: border-box"
          v-if="dialogTableVisible"
          :visible.sync="dialogTableVisible"
          :destroy-on-close="true"
        >
          <!-- <video src="../../assets/haidi/haidi3.mp4" width="100%" autoplay controls>
            <source src="../../assets/haidi/haidi3.mp4" type="video/mp4" />
          </video> -->
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("../../assets/haidi/haidi.png"),
      srcList: [require("../../assets/haidi/haidi.png")],
      dialogTableVisible: false,
    };
  },
};
</script>
<style>
/* 视频 */
.el-dialog {
  border: none;
  box-shadow: none;
}
.el-dialog,
.el-pager li {
  background-color: transparent;
  border: none;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #fff;
  font-size: 30px;
}
</style>
<style scoped>
.seabed {
  width: 852px;
  padding-top: 10px;
}
.imgs {
  padding: 0 20px;
}
.imgs h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
.imgs img {
  width: 100%;
  height: 100%;
}
.video-lin {
  position: relative;
}
.video-lin .vi-a {
  display: block;
  width: 370px;
}
.video-lin .vi-a img {
  width: 812px;
  height: 400px;
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

.video {
  padding: 0 20px;
}
.video h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
</style>
