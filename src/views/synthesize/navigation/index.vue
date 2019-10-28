<template>
  <div class="wrapperThree">
    <!--技术导航-->
    <div class="top">
      <span>技术导航</span>
      <hr />
    </div>
    <div class="box">
      <div class="box-router">
        <div class="source"></div>
        <router-link to="/photovoltaic" tag="p">
          <div class="photovoltaic"></div>
        </router-link>
        <router-link to="/Windpower" tag="p">
          <div class="Windpower"></div>
        </router-link>
        <router-link to="/biomass" tag="p">
          <div class="biomass"></div>
        </router-link>
        <router-link to="/Photothermal" tag="p">
          <div class="Photothermal"></div>
        </router-link>
        <router-link to="/thermoelectricity" tag="p">
          <div class="thermoelectricity"></div>
        </router-link>
        <router-link to="/Dryhotrock" tag="p">
          <div class="Dryhotrock"></div>
        </router-link>
        <router-link to="/wasteheat" tag="p">
          <div class="wasteheat"></div>
        </router-link>
      </div>
      <div class="bigbox">
        <router-view></router-view>
      </div>
    </div>
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
.wrapperThree {
  height: 800px;
  margin-left: 15px;
}
.top {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 18px;
}
.top span {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
}
hr {
  width: 94%;
  margin-left: 10px;
}
.box {
  width: 99%;
  height: 700px;
  background-image: url("../../../assets/img/边框_总.png");
  background-size: 100% 100%;
}
.box-router {
  width: 98%;
  height: 140px;
  margin: 0 1%;
  display: flex;
  justify-content: space-around;
  background-image: url("../../../assets/img/导航bg.png");
  background-size: 100% 100%;
}
.photovoltaic {
  width: 200px;
  height: 100px;
  background-image: url("../../../assets/img/btn_光伏_sel.png");
  background-size: 100% 100%;
  margin-top: 20px;
}
.Windpower {
  width: 200px;
  height: 100px;
  background-image: url("../../../assets/img/btn_风电_nor.png");
  background-size: 100% 100%;
  margin-top: 20px;
}
.biomass {
  width: 200px;
  height: 100px;
  background-image: url("../../../assets/img/btn_生物质_nor.png");
  background-size: 100% 100%;
  margin-top: 20px;
}
.Photothermal {
  width: 200px;
  height: 100px;
  background-image: url("../../../assets/img/btn_光热_nor.png");
  background-size: 100% 100%;
  margin-top: 20px;
}
.thermoelectricity {
  width: 200px;
  height: 100px;
  background-image: url("../../../assets/img/btn_冷热电三联供_nor.png");
  background-size: 100% 100%;
  margin-top: 20px;
}
.Dryhotrock {
  width: 200px;
  height: 100px;
  background-image: url("../../../assets/img/btn_干热岩_nor.png");
  background-size: 100% 100%;
  margin-top: 20px;
}
.wasteheat {
  width: 200px;
  height: 100px;
  background-image: url("../../../assets/img/btn_余热发电_nor.png");
  background-size: 100% 100%;
  margin-top: 20px;
}
.source {
  width: 200px;
  height: 100px;
  background-image: url("../../../assets/img/源.png");
  background-size: 100% 100%;
  margin-top: 20px;
}
.bigbox {
  width: 98%;
  margin-left: 1%;
  height: 520px;
}
</style>
