<template>
  <div class="kong box">
    <div class="info">
      <h4>游戏介绍</h4>
      <p>
        于砂石中挖掘旧日，用双手拼凑霸主的英姿，感受千万年前恐龙的今容。
        当你手中的骨骸勾勒出完整的形体，沉睡的历史将在你眼前回放。
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      srcList: [
        require("../../assets/kongl/kl01.png"),
        require("../../assets/kongl/kl02.png"),
        require("../../assets/kongl/kl03.png"),
        require("../../assets/kongl/kl04.png"),
        require("../../assets/kongl/kl05.png"),
        require("../../assets/kongl/kl06.png"),
        require("../../assets/kongl/kl07.png"),
        require("../../assets/kongl/kl08.png"),
        require("../../assets/kongl/kl09.png"),
        require("../../assets/kongl/kl10.png"),
        require("../../assets/kongl/kl11.png"),
        require("../../assets/kongl/kl12.png"),
        require("../../assets/kongl/kl13.png"),
        require("../../assets/kongl/kl14.png"),
        require("../../assets/kongl/kl15.png"),
        require("../../assets/kongl/kl16.png"),
        require("../../assets/kongl/kl17.png"),
        require("../../assets/kongl/kl18.png"),
        require("../../assets/kongl/kl19.png"),
        require("../../assets/kongl/kl20.png"),
        require("../../assets/kongl/kl21.png"),
        require("../../assets/kongl/kl22.png"),
      ],
      dialogTableVisible1: false,
      dialogTableVisible2: false,
      dialogTableVisible3: false,
      dialogTableVisible4: false,
      dialogTableVisible5: false,
      dialogTableVisible6: false,
      dialogTableVisible7: false,
      dialogTableVisible8: false,
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
.kong {
  padding-top: 10px;
  /* height: 800px; */
}
.imgs {
  padding: 0 20px;
}
.imgs h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
.tu {
  height: 370px;
  overflow-y: scroll;
}
.preimg {
  width: 374px;
  height: 160px;
  margin: 10px;
}
.preimg img {
  width: 100%;
  height: 100%;
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
  width: 100%;
  height: 100%;
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
.video {
  padding: 0 20px;
  height: 580px;
}
.video h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
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
