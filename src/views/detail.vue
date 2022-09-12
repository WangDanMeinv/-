<template>
  <div>
    <deaTop></deaTop>
    <!-- 头部详情 -->
    <deaHeader :arr="arr2"></deaHeader>
    <!-- 简介组件 -->
    <deaBrief></deaBrief>
    <!-- 目录 第一章详情-->
    <deaCatal></deaCatal>
    <!-- 读者还在读的书 -->
    <deaLike></deaLike>
    <deaButtom></deaButtom>
  </div>
</template>

<script>
import deaTop from "@/components/detail/deaTop.vue";
import deaHeader from "@/components/detail/deaHeader.vue";
import deaBrief from "@/components/detail/deaBrief.vue";
import deaCatal from "@/components/detail/deaCatal.vue";
import deaLike from "@/components/detail/deaLike.vue";
import deaButtom from "@/components/detail/deaButtom.vue";
import { GoodDetailsAPI } from "@/request/api";
export default {
  name: "PipiDetail",

  data() {
    return {
      arr2: [],
    };
  },
  methods: {
    //  getList() {
    //   let goodId = this.$route.query.id;
    //   console.log(goodId);
    //   //使用axios接口信息
    //   this.$axios.get(`http://localhost:8088/bookshop/shopList`).then((res) => {
    //     console.log(res.data);
    //     // console.log(goodId);
    //     this.arr2 = res.data.arr2;
    //   });
    // },
    // getList() {
    //   let goodId = this.$route.query.id;
    //   this.$axios.get(`/list/${goodId}`).then((res) => {
    //     console.log(res);
    //   });
    // },
    // getList() {
    //   let goodId=this.$route.query.id;
    //   //使用axios接口信息
    //   GoodDetailsAPI(goodId).then(res=>{
    //     console.log(res.data);
    //     console.log(goodId);
    //     this.arr2 = res.data.arr2;
    //   });
    // },
  },
  // created() {
  //   this.getList();
  // },

  components: {
    deaTop,
    deaButtom,
    deaHeader,
    deaBrief,
    deaCatal,
    deaLike,
  },
};
</script>

<style lang="css" scoped>
</style>