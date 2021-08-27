<template>
  <div class="nav">
    <!-- logo -->
    <div class="nav-content">
      <div class="logo">
        <h1>
          <router-link title="杰游网络" to="/" @click.native="shuaxin1">
            浙江杰游网络科技有限公司
          </router-link>
        </h1>
      </div>
      <!-- 导航 -->
      <div class="menu">
        <el-menu
          :default-active="$route.path"
          mode="horizontal"
          text-color="#333"
          active-text-color="#EF3C0B"
          background-color="#fff"
          router
        >
          <el-menu-item index="/introduction" @click.native="shuaxin2"
            >公司简介</el-menu-item
          >
          <el-menu-item
            index="/iteminfo"
            @click.native="shuaxin3"
            :class="{ active: isActive }"
            >产品展示</el-menu-item
          >
          <el-menu-item index="/joinus" @click.native="shuaxin4">加入我们</el-menu-item>
          <el-menu-item index="/connection" @click.native="shuaxin5"
            >联系我们</el-menu-item
          >
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  watch: {
    $route(to, from) {
      if (to.matched[0].path === "/iteminfo") {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
  methods: {
    shuaxin1() {
      if (this.$route.path === "/") {
        this.$router.go(0);
      }
    },
    shuaxin2() {
      if (this.$route.path === "/introduction") {
        this.$router.go(0);
      }
    },
    shuaxin3() {
      if (this.$route.meta.item) {
        this.$router.go(0);
        this.isActive = true;
      }
    },
    shuaxin4() {
      if (this.$route.path === "/joinus") {
        this.$router.go(0);
      }
    },
    shuaxin5() {
      if (this.$route.path === "/connection") {
        this.$router.go(0);
      }
    },
  },
};
</script>

<style scoped>
/* 导航 */
.active {
  color: #ef3c0b !important;
}
.nav {
  background-color: #ffffff;
}
.nav-content {
  height: 80px;
  width: 1002px;
  margin: 0 auto;
  background-color: #fff;
}

.nav .el-menu {
  height: 80px;
  line-height: 78px;
  display: flex;
  justify-content: space-between;
  border: none;
}
.nav .el-menu .el-menu-item {
  height: 78px;
  line-height: 78px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  opacity: 0.9;
  background-color: transparent !important;
}
.nav .el-menu .el-menu-item:hover {
  background-color: transparent !important;
}
/* 网站logo */
.logo {
  float: left;
  margin-left: 40px;
  height: 80px;
  font-size: 0;
}
.logo h1 a {
  display: block;
  width: 66px;
  height: 66px;
  margin-top: 7px;
  background: url("../assets/imgs/01.png") no-repeat;
  background-size: cover;
  text-indent: -9999px;
}
.menu {
  float: left;
  width: 800px;
  box-sizing: border-box;
  margin-left: 96px;
}
</style>
