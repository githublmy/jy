<template>
  <div class="foot">
    <div class="content">
      <div class="log">
        <img src="../assets/imgs/02.png" alt="杰游网络" />
      </div>
      <div class="fmiddle">
        <ul class="clearfix">
          <li class="first-li"><span>网站导航：</span></li>
          <li>
            <router-link to="/introduction" @click.native="shuaxin">关于我们</router-link>
          </li>
          <li>
            <router-link to="/connection" @click.native="shuaxin2">联系我们</router-link>
          </li>
          <li>
            <router-link to="/joinus" @click.native="shuaxin3">加入我们</router-link>
          </li>
        </ul>
        <div class="address">
          <p>地址：浙江省绍兴市上虞区曹娥街道惠普广场B栋701</p>
          <p>电话：13661116579</p>
          <p>
            邮箱：jieyougame@163.com
            <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
              >浙ICP备2021005110号-1</a
            >
          </p>
        </div>
      </div>
      <div class="code">
        <img src="../assets/imgs/03.jpg" alt="杰游网络" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    shuaxin() {
      if (this.$route.path === "/introduction") {
        this.$router.go(0);
        this.$router.push({ path: "/introduction" });
      }
    },
    shuaxin2() {
      if (this.$route.path === "/connection") {
        this.$router.go(0);
        this.$router.push({ path: "/connection" });
      }
    },
    shuaxin3() {
      if (this.$route.path === "/joinus") {
        this.$router.go(0);
        this.$router.push({ path: "/joinus" });
      }
    },
  },
};
</script>

<style>
/* 清除浮动 */
.clearfix::after,
.clearfix::before {
  content: "";
  display: table;
  clear: both;
}
.foot {
  height: 200px;
  min-width: 1002px;
  margin-bottom: 0;
  background-image: url("../assets/imgs/11.jpg");
}
.content {
  width: 1002px;
  margin: 0 auto;
  display: flex;
  color: #fff;
  font-size: 12px;
}
.content .fmiddle ul {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 38px;
}
.address p {
  margin: 5px 38px;
}
.content .fmiddle li {
  list-style: none;
  float: left;
  margin-right: 20px;
}
/* logo */
.content .log {
  flex: 2;
  position: relative;
  height: 200px;
}
.content .log img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.content .fmiddle {
  flex: 3;
}
.code {
  flex: 1;
  position: relative;
  height: 200px;
}
.content .fmiddle a {
  text-decoration: none;
  color: #fff;
}
.content .fmiddle a:hover {
  color: #ec3c0b;
}
.code img {
  width: 140px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
