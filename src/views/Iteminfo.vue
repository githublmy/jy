<template>
  <div class="box">
    <div class="inteminfo clearfix">
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="slide">
        <!-- <transition :name="transitionName"> -->
          <router-view></router-view>
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
};
</script>

<style>
/* 动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.2s;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100px, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100px, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100px, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100px, 0, 0);
}
</style>
<style scoped>
/* 清除浮动 */
.clearfix::after,
.clearfix::before {
  content: "";
  display: table;
  clear: both;
}
.inteminfo {
  margin: 0 auto;
  width: 1002px;
}
.sidebar {
  float: left;
  width: 150px;
}
.slide {
  margin-left: 150px;
  position: relative;
}
</style>
