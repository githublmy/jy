<template>
  <div id="app">
    <Navmenu></Navmenu>
    <router-view></router-view>
    <Foot></Foot>
    <el-backtop>
      <div style="color: #fff">
        <i class="el-icon-arrow-up"></i>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import Foot from "./components/Foot";
import Navmenu from "./components/Navmenu";
export default {
  name: "App",
  components: {
    Navmenu,
    Foot,
  },
};
</script>

<style>
#app {
  margin: 0 auto;
}
html {
  overflow-x: hidden;
}
body {
  margin: 0;
}
/* 全局使用回到顶部element组件 */
.el-backtop {
  background-color: #3a8ee6;
  font-size: 40px;
  border-radius: 4px;
}
.el-backtop:hover {
  background-color: #3a8ee6;
}
</style>
