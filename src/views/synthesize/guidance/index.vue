<template>
  <div class="wrapperOne">
    <div class="content-guidance">
      <div class="content-head">
        <span>指导思想</span>
        <hr />
      </div>
      <div class="content-title">
        <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="textarea"></el-input>
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

      <div class="sgniificance-bg">
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
  width: 91rem;
  height: 51.625rem;
  background-image: url("../../../assets/img/服务类型.png");
  background-size: 100% 100%;
  margin-top: 3.625rem;
  position: relative;
}
.kind-servse {
  height: 8rem;
  width: 103.4375rem;
  display: flex;
  color: #90befc;
  position: absolute;
  top: 11rem;
}

.kind-servse > li:nth-child(1) {
  height: 6.9rem;
  width: 15.49rem;
  margin-left: 9.8rem;
}
.kind-servse > li:nth-child(2) {
  width: 15rem;
  margin-left: 13.3rem;
}
.kind-servse > li:nth-child(3) {
  margin-left: 14.8rem;
  width: 18.49rem;
}
.kind-servse > li > h5 {
  font-size: 2rem;
  color: #fff;
}
.kind-servse > li > p {
  line-height: 2rem;
  font-size: 1.4rem;
  margin-top: 1rem;
}
.kind-foot {
  height: 8rem;
  width: 103.4375rem;
  display: flex;
  color: #90befc;
  position: absolute;
  top: 61.5rem;
  left: 5rem;
}
.kind-foot > li:nth-child(1) {
  width: 17rem;
  margin-left: 6.8rem;
}
.kind-foot > li:nth-child(2) {
  width: 19rem;
  margin-left: 12.8rem;
}
.kind-foot > li:nth-child(3) {
  width: 19rem;
  margin-left: 6.8rem;
}
.kind-foot > li > h5 {
  font-size: 2rem;
  color: #fff;
}
.kind-foot > li > p {
  line-height: 2rem;
  margin-top: 1rem;
  font-size: 1.4rem;
}

.significance-kind {
  position: relative;
}
.kind-head {
  height: 7.5rem;
  line-height: 3.125rem;
  display: flex;
}
.kind-head > span {
  font-size: 2.5rem;
  width: 20.5rem;
}
.kind-head > hr {
  width: 80rem;
  margin-left: 1.25rem;
  margin-top: 1.5rem;
}
.wrapperOne {
  height: 120.4375rem;
  width: 171rem;
  display: flex;
}
.content-guidance {
  width: 61rem;
}
.content-head {
  width: 59.5rem;
  height: 7.5rem;
  line-height: 3.125rem;
  display: flex;
}
.content-head > span {
  margin-top: 2.5rem;
  font-size: 2.5rem;
  margin-left: 2.5rem;
  width: 10.5rem;
}
.content-head > hr {
  width: 48rem;
  margin-left: 1.25rem;
  margin-top: 3.85rem;
}
.content-title {
  height: 12rem;
  width: 59.5rem;
  padding-left: 2.5rem !important;
  position: relative;
  margin-top: 2.4rem;
}

.content-bg {
  height: 41.25rem;
  width: 41.25rem;
  margin-left: 8.78125rem;
  background-image: url("../../../assets/img/环形bg_2.png");
  background-size: 100% 100%;
}
.content-first {
  text-indent: 2em;
  height: 5.6875rem;
  line-height: 3.125rem;
  color: #8ebffc;
  font-size: 1.8rem;
  width: 59.5rem;
  margin-left: 2.5rem;
}
.content-two {
  width: 59.5rem;
  display: flex;
}
.word {
  width: 14.75rem;
  height: 41.3125rem;
  color: #8ebffc;
  line-height: 4.125rem;
  font-size: 1.8rem;
  margin-left: 2.5rem;
}
.image {
  width: 46.125rem;
  height: 41.3125rem;
  margin-top: 1.5rem;
  margin-left: 30px;
  background-image: url("../../../assets/img/三型两网.png");
  background-size: 100% 100%;
  margin-left: 5.125rem;
}
.content-footer {
  margin-top: 7.125rem;
  height: 50rem;
}
.content-significance {
  width: 103.4375rem;
  position: relative;
  margin-left: 6.5625rem;
}
.significance-head {
  height: 7.5rem;
  line-height: 3.125rem;
  display: flex;
}
.significance-head > span {
  margin-top: 2.5rem;
  font-size: 2.5rem;
  width: 23.5rem;
}
.significance-head > hr {
  width: 77.4375rem;
  margin-left: 1.25rem;
  margin-top: 3.85rem;
}
.significance-main {
  height: 43.25rem;
  display: flex;
}
.significance-title {
  width: 34.71875rem;
  text-indent: 2em;
  letter-spacing: 0.3rem;
  color: #8ebffc;
  font-size: 1.8rem;
  line-height: 3.125rem;
  margin-top: 2.48rem;
}
.significance-list {
  width: 68.71875rem;
  margin-top: 3.75rem;
}
.significance-list > li {
  height: 6.25rem;
  line-height: 6.125px;
  font-size: 1.875rem;
  color: #e2e1e7;
  margin-left: 160px;
  margin-left: 25.5rem;
  letter-spacing: 2px;
}
.size {
  font-size: 3.125rem;
  color: #fff;
  word-spacing: 8px;
  letter-spacing: 0.3rem;
}
.significance-bg > p {
  background-image: url("../../../assets/img/服务分割线.png");
  background-size: 100% 100%;
  width: 15.125rem;
  height: 45.25rem;
  position: absolute;
  top: 5rem;
  left: 52rem;
}
.icon {
  width: 2rem;
  height: 2rem;
  background-image: url("../../../assets/img/icon_1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 10.1875rem;
  left: 4.5625rem;
}
.icon2 {
  width: 2rem;
  height: 2rem;
  background-image: url("../../../assets/img/icon_1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 10.3875rem;
  left: 69rem;
}
</style>
