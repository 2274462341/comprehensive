<template>
  <div class="wrapperFive">
    <div class="course-head">
      <span>综合能源服务的历史进程</span>
      <hr />
    </div>
    <div class="course-main">
      <div class="main-left">
        <div class="left-lists">
          <div class="main-list" v-for="(item,index) in data" :key="index">
            <img :src="item.img" alt />
            <div class="main-position">{{item.title}}</div>
          </div>
        </div>
        <div class="left-bg"></div>
      </div>
      <div class="main-middle">
        <div class="num1">2014</div>
        <div class="num2">2015</div>
        <div class="num3">2016</div>
        <div class="num4">2017</div>
        <div class="num5">2018</div>
        <div class="num6">2019</div>
      </div>
      <div class="main-right">
        <div class="right-bg"></div>
        <div class="main-lists">
          <div class="main-list" v-for="(item,index) in datas" :key="index">
            <img :src="item.img" alt />
            <div class="main-posit">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      data: [
        {
          id: 1,
          title:
            "2014 习总书记在中央财经领导小组第六次会议上提出推动能源供给、能源消费、能源技术、能源体制的革命和全方位加强国际合作的战略思想，明确要实现能源的优化配置。进行融合。",
          img: require("../../../assets/img/bg_2014.png")
        },
        {
          id: 1,
          title:
            "2016 国家发革委、国家能源局《能源发展“十三五”规划》指出构建“清洁低碳、安全高效”的能源体系，积极推进“互联网+”智慧能源的发展，明确互联网要与能源生产、传输、消费、供给以及市场进行融合。",
          img: require("../../../assets/img/bg_2016.png")
        },
        {
          id: 1,
          title:
            "2018 国网公司《加快拓展综合能源服务市场实施意见》提出国家电网公司将加快综合能源服务业务布局和重点项目建设，加强业务和技术队伍建设，并因地制宜探索实施分布式新能源项目。",
          img: require("../../../assets/img/bg_2018.png")
        }
      ],
      datas: [
        {
          id: 1,
          title:
            "2015 国务院《关于积极推进“互联网＋”行动的指导意见》指出通过互联网促进能源系统扁平化，推进能源生产与消费模式革命，提高可再生能源占比，促进能源利用结构优化。",
          img: require("../../../assets/img/bg_2015.png")
        },
        {
          id: 1,
          title:
            "2017 国网公司《关于在各省公司开展综合能源服务业务的意见》明确国网公司由电能供应商向综合能源服务商转变，将综合能源服务作为主营业务，积极推进综合能源服务业务发展。",
          img: require("../../../assets/img/bg_2017.png")
        },
        {
          id: 1,
          title:
            "2019 国网公司《关于推进综合能源服务业务发展2019-2020年行动计划》提出布局综合能效服务、供冷供热供电多能服务、分布式能源服务、专属电动汽车服务，不断深化综合能源服务业务发展。",
          img: require("../../../assets/img/bg_2019.png")
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.wrapperFive {
  width: 133rem;
  margin-left: 2.5rem;
  height: 120.4375rem;
}
.num1 {
  position: absolute;
  top: 5.2rem;
  left: 3.5rem;
  font-size: 3rem;
}

.num2 {
  position: absolute;
  top: 20.8rem;
  right: 3.5rem;
  font-size: 3rem;
}
.num3 {
  position: absolute;
  top: 36.5rem;
  left: 3.5rem;
  font-size: 3rem;
}
.num4 {
  position: absolute;
  top: 51.8rem;
  right: 3.5rem;
  font-size: 3rem;
}
.num5 {
  position: absolute;
  top: 67.1rem;
  left: 3.5rem;
  font-size: 3rem;
}
.num6 {
  position: absolute;
  top: 82.8rem;
  right: 3.5rem;
  font-size: 3rem;
}
.course-head {
  display: flex;
}
.course-head > span {
  font-size: 2.5rem;
  width: 27.5rem;
  margin-bottom: 4.5rem;
  margin-top: 2.5rem;
}
.course-head > hr {
  width: 99.875rem;
  margin-left: 1.25rem;
  margin-top: 3.625rem;
}
.course-main {
  display: flex;
}
.main-left {
  width: 46.25rem;
  height: 110.875rem;
}
.left-bg {
  width: 40.6875rem;
  height: 18rem;
  margin-top: 4rem;
  background-image: url("../../../assets/img/综.gif");
  background-size: 100% 100%;
}
.main-middle {
  width: 30.75rem;
  height: 91.625rem;
  margin: 6.9375rem 3.625rem 12.375rem 3.625rem;
  background-image: url("../../../assets/img/链接bg.png");
  background-size: 100% 100%;
  position: relative;
}
.main-right {
  width: 46.6875rem;
  height: 110.7375rem;
}
.right-bg {
  width: 36.6875rem;
  height: 6rem;
  margin-left: 3rem;
  margin-right: 7rem;
  margin-top: 4rem;
  background-image: url("../../../assets/img/合.gif");
  background-size: 100% 100%;
}
.main-lists {
  margin-top: 12rem;
  margin-bottom: 6.125rem;
}
.main-list {
  width: 46.75rem;
  height: 25.875rem;
  margin-bottom: 2.5rem;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
.main-position {
  position: absolute;
  top: 0.3rem;
  left: 18.125rem;
  width: 24.5rem;
  height: 25rem;
  line-height: 2.75rem;
  letter-spacing: 0.3rem;
  font-size: 1.8rem;
  color: #ffffff;
  padding-top: 1.1rem;
}
.main-posit {
  position: absolute;
  top: 0.3rem;
  right: 18.125rem;
  width: 24.3rem;
  height: 25rem;
  line-height: 2.75rem;
  letter-spacing: 0.3rem;
  font-size: 1.8rem;
  color: #ffffff;
  padding-top: 1.3rem;
}
</style>
