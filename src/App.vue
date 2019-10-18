<template>
  <div id="app">
    <div class="header">
      <div class="header-left"></div>
      <div class="header-middle"></div>
      <div class="header-right"></div>
      <ul class="header-list">
        <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
      </ul>
      <ol class="header-lists">
        <li v-for="(item,index) in lists" :key="index">{{item.title}}</li>
      </ol>
    </div>
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
    return {
      list: [
        {
          id: 1,
          title: "运营分析"
        },
        {
          id: 2,
          title: "安全生产"
        },
        {
          id: 3,
          title: "项目资金"
        },
        {
          id: 4,
          title: "综合能源"
        },
        {
          id: 5,
          title: "清洁能源"
        }
      ],
      lists: [
        {
          id: 1,
          title: "乌鲁木齐-多云转晴-23°C"
        },
        {
          id: 2,
          title: "2019年5月26日"
        },
        {
          id: 3,
          title: "星期三"
        },
        {
          id: 4,
          title: "21:00:00"
        }
      ]
    };
  },
  components: {
    Synthesize
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 5000px;
  height: 900px;
  background: #000033;
  color: #ffff;
}
.header {
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 10px;
  position: relative;
}
.header-left {
  height: 50px;
  width: 33.3%;
  background-image: url("./assets/img/标题bg_2.png");
  background-size: 100% 100%;
  margin-top: 7px;
}

.header-middle {
  width: 33.3%;
  height: 50px;
  background-image: url("./assets/img/标题bg_1.2.png");
  background-size: 100% 100%;
  margin-top: 7px;
}
.header-right {
  width: 33.3%;
  height: 50px;
  background-image: url("./assets/img/标题bg_3.png");
  background-size: 100% 100%;
  margin-top: 7px;
}
.header-list {
  position: absolute;
  top: 16px;
  left: 420px;
  display: flex;
  width: 1100px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  justify-content: space-around;
}
.header-lists {
  list-style: none;
  position: absolute;
  top: 16px;
  right: 420px;
  display: flex;
  width: 800px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  justify-content: space-around;
}
.main {
  width: 100%;
  height: 800px;
  background-image: url("./assets/img/bg_总.png");
  background-size: 100% 100%;
}
</style>
