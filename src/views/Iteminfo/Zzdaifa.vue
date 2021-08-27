<template>
  <div class="z">
    <div class="info">
      <h4>游戏介绍</h4>
      <p>
        在AR技术的帮助下，穿戴上不同风格的服装，感受不同人生的趣味。上一刻在雪山攀登，下一秒与海中漫步，或是在月球辗转腾挪，也可在丛林躲避潜藏的猛兽。为这份不同的生活保留一份照片，留存一份回忆。
      </p>
    </div>
    <div class="imgs">
      <h4>相关图片</h4>
      <div class="tu">
        <el-image :src="imgUrl" :preview-src-list="srcList"> </el-image>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require("../../assets/zzdfa/zzdf.png"),
      srcList: [require("../../assets/zzdfa/zzdf.png")],
    };
  },
};
</script>

<style scoped>
.z {
  padding-top: 10px;
  height: 800px;
  box-sizing: border-box;
}
.imgs {
  padding: 0 20px;
}
.imgs h4 {
  color: #000;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(185, 182, 182);
}
</style>
