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
  width: 720rem;
  height: 120.4375rem;
  display: flex;
}
.one {
  width: 171rem;
}
.two {
  width: 303.125rem;
  margin-left: 1.625rem;
}
.three {
  width: 100.9375rem;
  margin-left: 1.625rem;
}
.fore {
  width: 133rem;
  margin: 0 1.625rem;
}
</style>
 