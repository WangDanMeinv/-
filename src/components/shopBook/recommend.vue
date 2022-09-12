<template>
  <div class="recomIl ban">
    <div v-for="arr in arr" :key="arr.id">
      <h1>{{ arr.comt }}</h1>
      <div class="con" @click="goToDeatails(arr.id)">
        <div class="left">
          <img :src="arr.url" alt="" />
        </div>
        <div class="right fl">
          <h2>{{ arr.title }}</h2>
          <h3 class="webkit">{{ arr.conten }}</h3>
          <h3 class="bott">{{ arr.author }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PipiRecommend",

  data() {
    return {};
  },
  props: ["arr"],
  mounted() {},

  methods: {
    goToDeatails(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="css" scoped>
.recomIl h1 {
  font-weight: 700;
  font-size: 24px;
  margin: 12px 0;
}
.recomIl {
  /* height: 260px; */
  margin-bottom: 10px;
  overflow: hidden;
}
.recomIl .con {
  display: flex;
  justify-content: space-around;
}
.recomIl .left {
  width: 30%;
}
.recomIl .left img {
  width: 100%;
  height: 140px;
  display: block;
}
.recomIl .right {
  float: left;
  width: 65%;
  height: 140px;
  position: relative;
}
.recomIl .right h2 {
  font-size: 20px;
  height: 35px;
  font-weight: 700;
}
.recomIl .right h3 {
  color: #888;
  margin-bottom: 6px;
}
.recomIl .right h3.bott {
  position: absolute;
  bottom: 0;
}
</style>