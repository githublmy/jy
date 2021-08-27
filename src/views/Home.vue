<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel :interval="5000" height="45vw" :autoplay="false" trigger="click">
        <el-carousel-item v-for="(item, index) in pics" :key="index">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-img">
      <ul class="home-main">
        <li>
          <router-link to="/introduction">
            <img src="../assets/imgs/07.jpg" />
          </router-link>
        </li>
        <li>
          <router-link to="/joinus">
            <img src="../assets/imgs/08.jpg" />
          </router-link>
        </li>
        <li>
          <router-link to="/iteminfo/xiuxian">
            <img src="../assets/imgs/09.jpg" />
          </router-link>
        </li>
        <li>
          <router-link to="/connection">
            <img src="../assets/imgs/10.jpg" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pics: [
        {
          url: require("../assets/imgs/04.jpg"),
        },
        {
          url: require("../assets/imgs/05.jpg"),
        },
        {
          url: require("../assets/imgs/06.jpg"),
        },
      ],
    };
  },
};
</script>
<style>
.block {
  width: 100%;
  min-width: 1002px;
}
.block img {
  width: 100%;
  height: 100%;
}
.block .el-carousel__button {
  background-color: #141514;
  height: 4px;
}
.block .el-carousel__button:hover {
  background-color: #08b3ef;
}
.block .el-carousel__indicator.is-active button {
  background-color: #08b3ef;
}
/* 轮播图最小高度 */
.block .el-carousel__container {
  min-height: 450px !important;
}
.home-img {
  width: 1002px;
  margin: 0 auto;
}
.home-main {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
}
/* 轮播图箭头 */
.el-carousel__arrow {
  font-size: 40px;
  width: 50px;
  height: 50px;
}
.home-main li {
  list-style: none;
  margin: 1px;
  overflow: hidden;
}
.home-main li a {
  text-decoration: none;
}
.home-main li img {
  display: block;
  margin: 0;
  width: 498px;
  height: 332px;
  transition: all linear 0.5s;
}
.home-main li img:hover {
  transform: scale(1.2);
}
</style>
