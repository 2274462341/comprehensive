<template>
  <div class="wrapperAll">
    <div class="one">
      <Guidance></Guidance>
    </div>
    <div class="two">
      <Navigation></Navigation>
    </div>
    <div class="three">
      <Practice></Practice>
    </div>
    <div class="fore">
      <course></course>
    </div>
  </div>
</template>

<script>
import Guidance from "./guidance/index"; //指导思想
import Navigation from "./navigation"; //技术导航
import Practice from "./practioce"; //综合能源服务实践路径图
import Course from "./course"; //综合能源服务的历史进程
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  components: {
    Guidance,
    Navigation,
    Practice,
    Course
  }
};
</script>

<style scoped>
.wrapperAll {
  width: 100%;
  display: flex;
}
.one {
  width: 23.8%;
  border: solid 1px #ccc;

}
.two {
  width: 42.3%;
  border: solid 1px #ccc;
  margin-left: 14px;
}
.three {
  width: 14%;
  border: solid 1px #ccc;
  margin-left: 14px;
}
.fore {
  width: 18.9%;
  border: solid 1px #ccc;
  margin-left: 14px;
}
</style>
