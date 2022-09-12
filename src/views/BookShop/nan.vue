<template>
  <div>
    <!-- 轮播图功能 -->
    <!-- <div class="swiper banxin">
              <img src="@/assets/images/swiper1.png" alt="">
          </div> -->
    <swiper :swipers="swiper"></swiper>
    <!-- 列表功能 -->
    <rank :list="list"></rank>
    <!-- 主编推荐 -->
    <recommend :arr="arr1"></recommend>
    <!-- 小说水平排列列表 -->
    <level :stand="stand"></level>
    <recommend :arr="arr2"></recommend>
    <!-- 阅读榜 -->
    <read :reads="read"></read>
    <recommend :arr="arr3"></recommend>
  </div>
</template>
  <script>
import recommend from "@/components/shopBook/recommend.vue";
import rank from "@/components/shopBook/rank.vue";
import level from "@/components/shopBook/level.vue";
import read from "@/components/shopBook/read.vue";
import swiper from "@/components/shopBook/swiper.vue";
export default {
  data() {
    return {
      // 排行数据
      swiper: [],
      list: [],
      // 水平排列数据
      stand: [],
      // 小说第一个数据
      arr1: [],
      arr2: [],
      arr3: [],
      read: [],
    };
  },
  methods: {
    //定义方法
    getList() {
      //使用axios接口信息
      this.$axios.get("http://localhost:8088/bookshop/shopList").then((res) => {
        console.log(res.data);
        this.swiper = res.data.swiper;
        this.list = res.data.list;
        this.stand = res.data.stand;
        this.arr1 = res.data.arr1;
        this.arr2 = res.data.arr2;
        this.arr3 = res.data.arr3;
        this.read = res.data.read;
      });
    },
  },
  // 什么周期是用方法
  mounted() {
    this.getList();
  },
  components: {
    rank,
    level,
    recommend,
    read,
    swiper,
  },
};
</script>