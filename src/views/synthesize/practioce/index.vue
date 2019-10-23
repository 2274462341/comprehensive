<template>
  <div class="wrapperFore">
    <div class="practive-head">
      <span>综合能源服务实践路径图</span>
      <hr />
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.wrapperFore {
  width: 100%;
  height: 750px;
}
.bg {
  width: 95%;
  height: 700px;
  background-image: url("../../../assets/img/路径图.png");
  background-size: 100% 100%;
  margin-left: 2%;
}
.practive-head {
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 18px;
  margin-left: 2%;
}
.practive-head > hr {
  width: 65%;
  padding-top: 18px;
  margin-left: 8px;
}
</style>
