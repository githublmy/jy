<template>
  <div class="jingsu box">
    <div class="info">
      <h4>游戏介绍</h4>
      <p>
        与人赛跑，平常不过，但谁敢和猛兽上演追逐战？
        而现在，你可以真实地和猛兽竞速而不必担心自己的安危。
        趣味、刺激，还有多种可选的对手，感受不同等级猛兽的压迫吧！
      </p>
    </div>

    <div class="imgs">
      <h4>相关图片</h4>
      <div class="tu">
        <el-image
          class="preimg"
          v-for="(item, index) in srcList"
          :key="index"
          :src="item"
          :preview-src-list="srcList"
          lazy
        >
        </el-image>
      </div>
    </div>
    <div class="video clearfix">
      <h4>相关视频</h4>
      <div class="v">
        <div class="video-lin">
          <router-link class="vi-a" @click.native="dialogTableVisible1 = true" to="">
            <i class="el-icon-video-play v-i"></i>
            <img src="../../assets/jingsu/js20.png" />
          </router-link>
        </div>
        <el-dialog
          style="width: 100%; box-sizing: border-box"
          v-if="dialogTableVisible1"
          :visible.sync="dialogTableVisible1"
          :destroy-on-close="true"
        >
          <!-- <video src="../../assets/jingsu/jingsu1.mp4" width="100%" autoplay controls>
            <source src="../../assets/jingsu/jingsu1.mp4" type="video/mp4" />
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
      srcList: [
        require("../../assets/jingsu/js2.png"),
        require("../../assets/jingsu/js1.png"),
        require("../../assets/jingsu/js3.png"),
        require("../../assets/jingsu/js4.png"),
        require("../../assets/jingsu/js5.png"),
        require("../../assets/jingsu/js6.png"),
        require("../../assets/jingsu/js7.png"),
        require("../../assets/jingsu/js8.png"),
        require("../../assets/jingsu/js9.png"),
        require("../../assets/jingsu/js10.png"),
        require("../../assets/jingsu/js11.png"),
        require("../../assets/jingsu/js12.png"),
        require("../../assets/jingsu/js13.png"),
        require("../../assets/jingsu/js14.png"),
        require("../../assets/jingsu/js15.png"),
        require("../../assets/jingsu/js16.png"),
        require("../../assets/jingsu/js17.png"),
        require("../../assets/jingsu/js18.png"),
        require("../../assets/jingsu/js19.png"),
        require("../../assets/jingsu/js20.png"),
        require("../../assets/jingsu/js21.png"),
      ],
      dialogTableVisible1: false,
      dialogTableVisible2: false,
      dialogTableVisible3: false,
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
.jingsu {
  padding-top: 10px;
  background-color: rgb(255, 250, 250);
}
.imgs {
  padding: 0 20px;
}
.tu {
  height: 380px;
  overflow-y: scroll;
}
.imgs h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
.preimg {
  width: 374px;
  height: 170px;
  margin: 10px;
}
.preimg img {
  width: 100%;
  height: 100%;
}
.video {
  padding: 0 20px;
}
.video h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
.video-lin {
  position: relative;
}
.video-lin .vi-a {
  display: block;
  width: 370px;
  height: 206px;
}
.video-lin .vi-a img {
  width: 380px;
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
.v {
  float: left;
  margin: 10px;
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
