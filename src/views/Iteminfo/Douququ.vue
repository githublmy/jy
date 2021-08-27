<template>
  <div class="sie box">
    <div class="info">
      <h4>游戏介绍</h4>
      <p class="text">
        百日之虫生桀骜，千年秋战今犹啸。血战无悔，重伤不退，小小的蛐蛐却能让我们感受生命的强大。而现在，你可以直接感受千年民俗的乐趣。去山林中捕获饲养属于自己的斗士，去见证你选择的伙伴是否可与你并肩奋战。就如真正的斗虫一般，不到最后一刻，你都可以相信你的战友。
      </p>
    </div>
    <div class="imgs">
      <h4>相关图片</h4>
      <div id="photo_box">
        <img src="../../assets/imgs/17.jpg" />
        <img src="../../assets/imgs/18.jpg" />
        <img src="../../assets/imgs/19.jpg" />
        <img src="../../assets/imgs/20.jpg" />
        <img src="../../assets/imgs/21.jpg" />
        <img src="../../assets/imgs/18.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sie {
  padding-top: 10px;
  height: 800px;
}
.imgs {
  padding: 0 20px;
}
.imgs h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
/*设置相册盒子大小、位置、外边框、旋转参数*/
#photo_box {
  width: 320px;
  height: 400px;
  position: relative;
  top: 100px;
  left: 240px;
  transform-style: preserve-3d;
  animation: run 20s linear infinite;
}

/*设置图像大小、边框、圆角、位置*/
#photo_box img {
  width: 300px;
  border: 5px solid #ccc;
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
#photo_box:hover {
  animation-play-state: paused;
}

/*依次设置图像盒子中每个图像旋转后位置*/
#photo_box img:nth-child(1) {
  transform: rotateY(0) translateZ(300px);
}
#photo_box img:nth-child(2) {
  transform: rotateY(60deg) translateZ(300px);
}
#photo_box img:nth-child(3) {
  transform: rotateY(120deg) translateZ(300px);
}
#photo_box img:nth-child(4) {
  transform: rotateY(180deg) translateZ(300px);
}
#photo_box img:nth-child(5) {
  transform: rotateY(240deg) translateZ(300px);
}
#photo_box img:nth-child(6) {
  transform: rotateY(300deg) translateZ(300px);
}
/* 设置动画，使图片旋转变换位置 */
@keyframes run {
  0% {
    transform: rotateX(0) rotateY(0deg);
  }
  25% {
    transform: rotateX(0) rotateY(-90deg);
  }
  50% {
    transform: rotateX(0) rotateY(-180deg);
  }
  75% {
    transform: rotateX(0) rotateY(-270deg);
  }
  100% {
    transform: rotateX(0) rotateY(-360deg);
  }
}
.info {
  /* margin-top: 200px; */
  padding: 0 20px;
}
.info h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
.info .text {
  font-size: 14px;
  line-height: 24px;
  text-indent: 2em;
}
</style>
