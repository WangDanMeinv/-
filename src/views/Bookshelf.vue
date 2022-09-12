
<template>
  <div>
    <div class="top">
      <p class="shu">书架</p>
    </div>
    <div>
      <!-- 字体图标的引用 -->
    </div>
    <div class="bianji">
      <div class="mask" @click="showSizer(false)" id="mask"></div>
      <span class="iconfont icon-daka"></span>
      <p class="du">本周读0分钟</p>
      <p class="xuan" @click="showSizer(true)">筛选</p>
      <Classfy v-show="showClassfy"></Classfy>
      <span class="iconfont icon-sanjiaoxing"></span>
      <p class="bian">编辑</p>
    </div>
    <div>
      <img src="../assets/css/img/a1.jpg" alt="" class="tu1" />
      <img src="../assets/css/img/a2.jpg" alt="" class="tu2" />
    </div>
  </div>
</template>

<script>
import Classfy from "@/components/Classfy.vue";
export default {
  data() {
    return {
      showClassfy: false,
    };
  },
  components: {
    Classfy,
  },
  methods: {
    showSizer(x) {
      if (x) {
        this.showClassfy = x;
        document
          .getElementById("mask")
          .setAttribute("class", ".top .bainji .mask1 ");
      }

      if (!x) {
        this.showClassfy = x;
        document
          .getElementById("mask")
          .setAttribute("class", ".top .bainji .mask ");
      }
    },
  },
};
</script>

<style lang="less" scoped>
/* 顶部 */
.top {
  height: 50px;
  background-color: rgb(173, 155, 155);
  .shu {
    font-size: 26px;
    font-weight: bold;
    float: left;
    margin-left: 5px;
    margin-top: 10px;
  }
}
.bianji {
  width: 100vw;
  height: 37px;
  background-color: rgb(179, 123, 123);
  position: relative;
  font-size: 15px;
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }
  .mask1 {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
  }
  .icon-daka {
    position: absolute;
    left: 9px;
    top: 6px;
    color: black;
  }
  .du {
    float: left;
    margin-top: 12px;
    margin-left: 38px;
  }
  .xuan {
    position: absolute;
    right: 90px;
    top: 12px;
  }
  .icon-sanjiaoxing {
    position: absolute;
    right: 70px;
    top: 13px;
    color: black;
    font-size: 10px;
  }
  .bian {
    position: absolute;
    right: 20px;
    top: 12px;
    border-left: 1px solid rgb(41, 32, 32);
    padding-left: 10px;
  }
}
.tu1 {
  width: 390px;
  height: 390px;
  position: absolute;
  top: 199px;
  right: 0px;
}
.tu2 {
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 80px;
  right: 20px;
}
</style>