<template>
  <div class="test">
    <div id="container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      marker: "",
    };
  },
  // 地图组件
  mounted() {
    this.getMap();
    this.addMarker();
  },
  methods: {
    addMarker() {
      this.map.clearMap();
      this.marker = new AMap.Marker({
        map: this.map,
        position: [120.839321,30.032628],
      });
    },
    getMap() {
      this.map = new AMap.Map("container", {
        center: [120.839321,30.032628],
        zoom: 18,
      });
    },
  },
};
</script>
<style scoped>
.test {
  width: 300px;
  height: 300px;
  margin: 20px auto;
}
#container {
  height: 300px;
}
</style>
