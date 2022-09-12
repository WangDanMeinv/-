<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swipers" :key="item.index">
        <img :src="item.url" alt="" />
      </div>
      <!-- 如果需要分页器 -->
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
  <script>
// Import Swiper Vue.js components
import Swiper from "swiper";
export default {
  props:["swipers"],
  mounted() {
    setTimeout(()=>{
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          // 自动播放
          delay: 4000, // 间隔时间的播放
        },
        //   分分页器点击
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
      })
    },500)
  },
};
</script>
<style lang="css" scoped>
.swiper-slide img{
    width: 100%;
}
</style>