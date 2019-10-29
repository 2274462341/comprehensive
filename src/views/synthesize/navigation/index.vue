<template>
  <div class="wrapperThree">
    <!--技术导航-->
    <div class="top">
      <span>技术导航</span>
      <hr />
    </div>
    <div class="box">
      <div class="a">
        <div class="jian">
          <div class="swiper-button-next btn"></div>
          <div class="swiper-button-prev btns"></div>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
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
            <div class="swiper-slide" style="background:red"></div>
          </div>
          <!-- Add Pagination -->
          <!-- <div class="swiper-pagination swiper-pagination-white"></div> -->
          <!-- Add Arrows -->
        </div>
      </div>
      <div class="bigbox">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../../node_modules/swiper/css/swiper.min.css";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
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

.a {
  position: relative;
  display: flex;
  width: 100%;
  height: 140px;
  margin: 0 1%;
  justify-content: space-around;
  background-image: url("../../../assets/img/导航bg.png");
  background-size: 100% 100%;
}
.jian {
  width: 200px;
  height: 116px;
  background-image: url("../../../assets/img/源.png");
  background-size: 100% 100%;
  margin-top: 12px;
}
.swiper-container {
  width: 84%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
}
.swiper-slide {
  display: flex;
  justify-content: space-around;
  background-position: center;
  background-size: cover;
}

.btn {
  position: absolute;
  top: 70px;
  left: 190px;
  -webkit-transform:scale(0.5);
  font-weight: 800;
}
.btns {
  position: absolute;
  top: 70px;
  left: 40px;
  -webkit-transform:scale(0.5);
  font-weight: 800;


}
.photovoltaic {
  width: 200px;
  height: 116px;
  background-image: url("../../../assets/img/btn_光伏_sel.png");
  background-size: 100% 100%;
  margin-top: 10px;
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
  height: 116px;
  background-image: url("../../../assets/img/源.png");
  background-size: 100% 100%;
  margin-top: 12px;
}
.bigbox {
  width: 98%;
  margin-left: 1%;
  height: 520px;
}
</style>
