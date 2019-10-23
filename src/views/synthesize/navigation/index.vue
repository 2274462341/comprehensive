<template>
  <div class="wrapperThree">
    
  </div>
</template>

<script>
import Swiper from "swiper"
import '../../../../node_modules/swiper/css/swiper.css'
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    _initSwiper(){
      var mwSwiper = new Swiper('.swiper-container',{
        
      })
    }
  }
};
</script>

<style scoped>
.wrapperThree {
  /* height: 800px; */
  /* background: #ccc; */
  /* border:solid 1px #ccc; */
  margin-left: 15px;


}
</style>
