<template>
  <div class="paihang">
    <!-- 固定的顶部栏 -->
    <div class="topBar clear">
      <section class="top-bar">
        <span
          class="back iconfont icon-shangyibu"
          @click="$router.push('/bookshop')"
        ></span>
        <a href="#" :class="{ wire: isShowBooks }" @click.prevent="nan">男生</a>
        <a href="#" :class="{ wire: !isShowBooks }" @click.prevent="nv">女生</a>
      </section>
  </div>
  </div>
</template>

<script>
export default {
  name: "PipiPaihang",

  data() {
    return {
      isShowBooks: false,
    };
  },

  mounted() {
    this.isShowBooks=true
  },

  methods: {
    nan() {
      this.isShowBooks = true;
      this.$router.push("/read/nan");
    },
    nv() {
      this.isShowBooks = false;
      this.$router.push("/read/nv");
    },
  },
};
</script>

<style lang="less" scoped>
a {
  color: gray;
}
.paihang {
  text-align: center;
  .topBar {
    width: 100%;
    height: 3rem;
    position: fixed;
    z-index: 1;
    background: white; /* 顶部栏颜色 */
    border-bottom: 0.05rem solid rgb(218, 213, 213);
    .back {
      float: left;
      font-size: 2rem;
    }
    .top-bar {
      width: 95%;
      line-height: 3rem;
      margin: 0 auto;
      // background: green;
      a {
        font-size: 1.3rem;
        margin: 1.1rem;
      }
      .wire {
        border-bottom: 2px solid red;
        padding-bottom: 5px;
        font-weight: 700;
      }
    }
  }
  .novalContent {
    width: 100%;
    padding-top: 16px;

    .sideBar {
      width: 7rem;
      height: 100vh;
      border-right: 0.05rem solid rgb(218, 213, 213);
      margin-top: 3rem;
      position: fixed;
      top: 0;
      li {
        height: 3rem;
        line-height: 3rem;
      }
    }
  }
}
.title1 {
  padding-top: 3rem;
}
</style>