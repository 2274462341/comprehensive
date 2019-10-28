<template>
  <div class="wrapperOne">
    <div class="content-guidance">
      <div class="content-head">
        <span>指导思想</span>
        <hr />
      </div>
      <div class="content-title">
        <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
      </div>
      <div class="content-bg"></div>
      <div class="content-footer">
        <div class="content-first">{{this.textarea1}}</div>
        <div class="content-two">
          <div class="word">{{this.textarea2}}</div>
          <div class="image"></div>
        </div>
      </div>
    </div>
    <div class="content-significance">
      <div class="significance-head">
        <span>综合能源服务及意义</span>
        <hr />
      </div>
      <div class="significance-main">
        <div class="significance-title">{{this.textarea3}}</div>
        <ul class="significance-list">
          <li v-for="(item,index) in arr" :key="index">
            <i>{{item.title}}</i>
            <i class="size">{{item.tit}}</i>
          </li>
        </ul>
      </div>

      <div class="significance-kind">
        <div class="kind-head">
          <span>综合能源服务类型</span>
          <hr />
        </div>
        <ul class="kind-servse">
          <li v-for="(item,index) in servse" :key="index">
            <h5>{{item.title}}</h5>
            <p>{{item.kind}}</p>
          </li>
        </ul>
        <div class="kind-bg"></div>
        <ul class="kind-foot">
          <li v-for="(item,index) in servses" :key="index">
            <h5>{{item.title}}</h5>
            <p>{{item.kind}}</p>
          </li>
        </ul>
      </div>

      <div class="significance-bg">
        <p></p>
      </div>
    </div>
    <!-- 定位 -->
    <div class="icon"></div>
    <div class="icon2"></div>
  </div>
</template>

<script>
 export default {
  name: "",
  data() {
    return {
      textarea:
        "能源是人类生存发展的重要物质基础，关系国计民生和国家战略竞争力。我国能源消费供给、能源结构转型、能源系统生态呈现新的发展趋势。习近平总书记提出了“四个革命、一个合作”和国家“清洁、低碳、安全、高效”能源发展战略。",
      textarea1:
        "国家电网公司深入贯彻落实国家能源战略、加快推动构建清洁低碳、安全高效的能源体系。按照“能源供应清洁化、能源配置智能化、能源消费",
      textarea2:
        "电气化、能源服务共享化”的思路，以能源互联网、智慧能源和多能互补为发展方向，构建以电为中心，智慧应用的新型能源消费市场。",
      textarea3:
        "以推进综合能源服务、提升社会能效水平为宗旨，以满足用户多元化能源需求为目标，综合运用先进的电力电子技术、信息技术和智能管理技术，以新一代电力系统为核心，建立能源互联网，将供能侧的多种供能方式和用能侧的多种用能需求进行有机协调，实现清洁替代和电能替代，全面提升社会综合能效。",
      arr: [
        {
          id: 1,
          title: "能源基础设施的",
          tit: "互联"
        },
        {
          id: 1,
          title: "能源形式的",
          tit: "互换"
        },
        {
          id: 1,
          title: "能源技术数据与信息技术数据的",
          tit: "互用"
        },
        {
          id: 1,
          title: "能源分配方式的互给",
          tit: "互给"
        },
        {
          id: 1,
          title: "能源生产与消费商业模式的互利",
          tit: "互利"
        }
      ],
      servse: [
        {
          id: 1,
          title: "能源供应服务",
          kind: "供电、气、冷、热、水、氢等能源"
        },
        {
          id: 2,
          title: "技术设备服务",
          kind: "智能微电网、储能、物联网等技术及设备"
        },
        {
          id: 3,
          title: "管理服务",
          kind: "节能、需求侧管理、运用大数据和云计算提供用能解决方案"
        }
      ],
      servses: [
        {
          id: 1,
          title: "工程服务",
          kind: "能源规划设计、工程建设、多能源运营维护、改造等"
        },
        {
          id: 2,
          title: "投融资服务",
          kind: "BOT、PPP、BT等建设模式"
        },
        {
          id: 3,
          title: "其他衍生增值服务",
          kind: "如移动支付交易平台等服务"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.kind-bg {
  width: 94%;
  height: 340px;
  background-image: url("../../../assets/img/服务类型.png");
  background-size: 100% 100%;
  margin-left: 16px;
  margin-top: 16px;
  position: relative;
}
.kind-servse {
  height: 80px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #90befc;
  position: absolute;
  left: 0;
  top: 46px;
}
.kind-servse > li {
  width: 160px;
  height: 100px;
  width: 160px;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
.kind-servse > li:nth-child(1) {
  padding-left: 90px;
}
.kind-servse > li:nth-child(2) {
  padding-left: 50px;
}
.kind-servse > li:nth-child(3) {
  padding-left: 60px;
}
.kind-servse > li > h5 {
  font-size: 16px;
  color: #fff;
  line-height: 30px;
}
.kind-servse > li > p {
  line-height: 20px;
  font-size: 14px;
}
.kind-foot {
  height: 80px;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: #90befc;
  position: absolute;
  bottom: -20px;
}
.kind-foot > li:nth-child(1) {
  padding-left: 100px;
}
.kind-foot > li:nth-child(2) {
  padding-left: 60px;
}
.kind-foot > li:nth-child(3) {
  padding-left: 50px;
}

.kind-foot > li {
  width: 160px;
}
.kind-foot > li > h5 {
  font-size: 16px;
  color: #fff;
  line-height: 30px;
}
.kind-foot > li > p {
  line-height: 20px;
  font-size: 12px;
}

.significance-kind {
  height: 440px;
  position: relative;
}
.kind-head {
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 18px;
}
.kind-head > hr {
  width: 78%;
  padding-top: 18px;
  margin-left: 8px;
}
.wrapperOne {
  height: 100%;
  display: flex;
}
.content-guidance {
  width: 39%;
  margin: 0 8px;
}
.content-head {
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 18px;
}
.content-head > hr {
  width: 80%;
  padding-top: 18px;
  margin-left: 8px;
}
.content-title {
  height: 100px;
  color: #90befc;

  position: relative;
}
.el-textarea__inner {
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
}
.content-bg {
  height: 260px;
  width: 58%;
  margin-left: 70px;
  background-image: url("../../../assets/img/环形bg_2.png");
  background-size: 100% 100%;
}
.content-first {
  text-align: left;
  text-indent: 2em;
  line-height: 22px;
  color: #90befc;
  font-size: 14px;
}
.content-two {
  display: flex;
}
.word {
  width: 100px;
  height: 280px;
  line-height: 22px;
  color: #90befc;
  font-size: 14px;
}
.image {
  width: 320px;
  margin-left: 30px;
  background-image: url("../../../assets/img/三型两网.png");
  background-size: 100% 100%;
}
.content-footer {
  margin-top: 30px;
  height: 300px;
}

.content-significance {
  width: 60%;
  position: relative;
}
.significance-head {
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 18px;
  display: flex;
}
.significance-head > hr {
  width: 75%;
  padding-top: 18px;
  margin-left: 8px;
}
.significance-main {
  height: 270px;
  display: flex;
}
.significance-title {
  width: 35.5%;
  line-height: 25px;
  font-size: 14px;
  text-indent: 2em;
  text-align: left;
  letter-spacing: 1px;
  word-spacing: 8px;
  color: #90befc;
}
.significance-list {
  width: 64%;
  text-align: left;
}
.significance-list > li {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #e2e1e7;
  margin-left: 160px;
  letter-spacing: 2px;
}
.size {
  font-size: 18px;
  color: #fff;
  word-spacing: 8px;
  letter-spacing: 3px;
}
.significance-bg > p {
  background-image: url("../../../assets/img/服务分割线.png");
  background-size: 100% 100%;
  width: 100px;
  height: 300px;
  position: absolute;
  top: 20px;
  left: 350px;
}
.icon {
  width: 16px;
  height: 16px;
  background-image: url("../../../assets/img/icon_1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 115px;
  left: 25px;
}
.icon2 {
  width: 16px;
  height: 16px;
  background-image: url("../../../assets/img/icon_1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 115px;
  left: 480px;
}
</style>
