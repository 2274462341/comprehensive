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
        <li>乌鲁木齐*多云转晴*23°C</li>
        <li>{{this.systemDate}}</li>
        <li>{{this.week}}</li>
        <li>{{this.timer}}</li>
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
      timer: "", //时间
      currentTime: new Date(), // 获取当前时间
      systemDate: "",//日期
      week:"",//星期
    };
  },
  components: {
    Synthesize
  },
  created() {
    let nowDate = new Date();
    let date = {
      year: nowDate.getFullYear(),
      month:
        nowDate.getMonth() + 1 < 10
          ? "0" + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1,
      date:
        nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate(),
      hour:
        nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours(),
      minutes:
        nowDate.getMinutes() < 10
          ? "0" + nowDate.getMinutes()
          : nowDate.getMinutes(),
      seconds:
        nowDate.getSeconds() < 10
          ? "0" + nowDate.getSeconds()
          : nowDate.getSeconds()
    };
    console.log(date);
    this.systemDate = date.year + "年" + date.month + "月" + date.date + "日";
    this.timer = date.hour + ":" + date.minutes + ":" + date.seconds;
   var now = new Date();
       var day = now.getDay();
       var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        this.week = weeks[day];
  }
};
</script>

<style>
.el-textarea__inner {
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: #90befc;
  font-size: 14px;
  /* word-spacing: 8px; */
  /* letter-spacing:1px; */
  text-indent: 2em;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 5000px;
  height: 850px;
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
  padding-top: 7px;
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
  height: 750px;
  background-image: url("./assets/img/bg_总.png");
  background-size: 100% 100%;
}
</style>
