<template>
  <div class="shenqi box">
    <div class="info">
      <h4>游戏介绍</h4>
      <p>
        缔结过往与现在缘分的镜头，梦回一幕幕被尘封的历史。
        曾经消逝的生命，而现在，你可以再次欣赏到它们的生活。
        恐龙间的玩耍争斗，草原中的生死竞速，暗流涌动的平静河流。
        这些，都是不为人知的，已经灭绝的生命们的日常。
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
        require("../../assets/shenqi/wyj01.png"),
        require("../../assets/shenqi/wyj02.png"),
        require("../../assets/shenqi/wyj03.png"),
        require("../../assets/shenqi/wyj04.png"),
        require("../../assets/shenqi/wyj05.png"),
        require("../../assets/shenqi/wyj06.png"),
        require("../../assets/shenqi/wyj07.png"),
        require("../../assets/shenqi/wyj08.png"),
        require("../../assets/shenqi/wyj09.png"),
        require("../../assets/shenqi/wyj10.png"),
        require("../../assets/shenqi/wyj11.png"),
      ],
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
.shenqi {
  padding-top: 10px;
}
.imgs {
  padding: 0 20px;
  overflow: hidden;
}
.imgs h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
.tu {
  height: 320px;
  overflow-y: scroll;
}
.preimg {
  width: 374px;
  height: 140px;
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
  height: 580px;
}
.video h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
</style>
