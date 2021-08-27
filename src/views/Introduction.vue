<template>
  <div class="introduction">
    <div class="img">
      <el-image :src="url">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">....</span>
        </div>
      </el-image>
    </div>

    <div class="img">
      <el-image :src="url2">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: require("../assets/imgs/12.jpg"),
      url2: require("../assets/imgs/13.jpg"),
    };
  },
};
</script>
<style scoped>
.introduction {
  width: 100%;
  height: 100%;
  min-width: 1002px;
  background-color: #a39b97;
}
.el-image__inner {
  min-width: 1002px;
}
.introduction img {
  display: block;
  width: 100%;
  min-width: 1002px;
}
.image-slot {
  text-align: center;
  height: 100%;
  margin: 0 auto;
  width: 1002px;
  font-size: 50px;
  color: #fff;
  line-height: 450px;
  height: 450px;
  opacity: 0.5;
  min-height: 450px;
  min-width: 1002px;
}
</style>
