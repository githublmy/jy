<template>
  <div class="side-bar">
    <el-menu :default-active="$route.path" text-color="#000000" router>
      <el-menu-item index="/iteminfo/xiuxian">
        <span slot="title">修仙世界</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/douququ">
        <span slot="title">斗蛐蛐</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/saiche">
        <span slot="title">火星赛车</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/seabed">
        <span slot="title">海底两万里</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/ar">
        <span slot="title">Ar招募官</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/zzdaifa">
        <span slot="title">整装待发</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/kongl">
        <span slot="title">恐龙考古</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/shenqi">
        <span slot="title">神奇望远镜</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/jingsu">
        <span slot="title">竞速赛道</span>
      </el-menu-item>
      <el-menu-item index="/iteminfo/baishou">
        <span slot="title">百兽乱舞</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped>
.side-bar .el-menu-item {
  height: 40px;
}
.side-bar .el-menu-item span {
  margin-left: 24px;
}
.side-bar .el-menu {
  border: none;
}
.side-bar .el-menu-item.is-active {
  background-color: #00c347 !important;
  border-radius: 4px;
  color: aliceblue;
}
.side-bar .el-menu-item:focus,
.el-menu-item:hover {
  background-color: #00c347 !important;
}
.side-bar .el-menu-item {
  line-height: 36px;
  padding: 0;
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
