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
  width: 95.9375rem;
  height: 120.4375rem;
  margin-left: 2.5rem;

}
.bg {
  width: 95.9375rem;

  height: 110.8375rem;
  background-image: url("../../../assets/img/路径图.png");
  background-size: 100% 100%;
  margin-top: 2.1rem;
  margin-top: 2.1rem;
}
.practive-head {
  height: 7.5rem;
  line-height: 3.125rem;
  display: flex;
}

.practive-head > span {
  margin-top: 2.5rem;
  font-size: 2.5rem;
  width: 32rem;
}
.practive-head > hr {
  width: 63.4375rem;
  margin-top: 3.85rem;
}
</style>
