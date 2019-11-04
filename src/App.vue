<template>
  <div id="app">
    <div class="main">
      <Synthesize></Synthesize>
    </div>
  </div>
</template>

<script>
import Synthesize from "./views/synthesize/index";
import "./assets/style.css"; //全局样式

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Synthesize
  }
};
</script>

<style>
.el-textarea__inner {
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: #8ebffc;
  font-size: 1.9rem;
  text-indent: 2em;
  height: 12rem;
  padding: 0 !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 720rem;
  height: 122.375rem;
  background: #000033;
  color: #ffff;
}
.main {
  width: 720rem;
  height: 122.375rem;
  margin: 0 2.0625rem 2.0625rem 2.0625rem;
}
</style>
