<template>
  <div class="d box">
    <div class="info">
      <h4>游戏介绍</h4>
      <p>火星，寄托人们无数对地外生命幻想的星球。</p>
      <p>
        今天，你可以驾驶疾驰的车辆，肆意游览这片未知的土地。仿真模拟驾驶游戏，就在火星，展开全新的探索之旅。或是探索前人辛苦开垦的基地，或是驰骋于神秘的谷底。你可以驾车肆意蜿蜒于山坡，也可于黑暗中缓步独行。
      </p>
      <p>未知，神秘，独属于火星的标签，今天，你可以来看看火星的真实面貌。</p>
    </div>
    <div class="imgs">
      <h4>相关图片</h4>
      <div class="tu">
        <el-image
          v-for="(item, index) in srcList"
          :key="index"
          class="preimg"
          :src="item"
          :preview-src-list="srcList"
          lazy
        >
        </el-image>
      </div>
    </div>
    <div class="video">
      <h4>相关视频</h4>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      srcList: [
        require("../../assets/saiche/01.png"),
        require("../../assets/saiche/02.png"),
        require("../../assets/saiche/03.png"),
        require("../../assets/saiche/04.png"),
        require("../../assets/saiche/05.png"),
        require("../../assets/saiche/06.png"),
        require("../../assets/saiche/07.png"),
        require("../../assets/saiche/08.png"),
        require("../../assets/saiche/09.png"),
        require("../../assets/saiche/10.png"),
        require("../../assets/saiche/11.png"),
        require("../../assets/saiche/12.png"),
        require("../../assets/saiche/13.png"),
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
.d {
  padding-top: 10px;
}
.imgs {
  padding: 0 20px;
}
.tu {
  height: 320px;
  overflow-y: scroll;
}

.imgs h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
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

/* 视频 */
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
}
.video-lin .vi-a img {
  width: 770px;
  height: 400px;
  margin-left: 8px;
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
