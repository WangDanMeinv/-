<template>
  <div>
    <div class="recomIl">
      <div>
        <div class="con">
          <div class="left">
            <img src="@/assets/images/j1.jpg" alt="" />
          </div>
          <div class="right fl">
            <h2>美女总裁的贴身女王</h2>
            <h3>雷死不偿命</h3>
            <h3>都市生活|已完结·127.9万字</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="vipBox">
      <i class="iconfont icon-zuanshi_o"></i>
      <span>开通vip,所有书免费读</span>
      <i class="iconfont icon-xiayibu"></i>
    </div>
        <!-- 评分 -->
        <ul class="ping">
      <li>
        <h2>9.2 <img src="@/assets/images/xing.jpg" alt="" /></h2>
        <h3>小编评分 <i class="iconfont icon-xiayibu"></i></h3>
      </li>
      <li>
        <h2>2.2万人</h2>
        <h3>正在阅读</h3>
      </li>
      <li>
        <h2>12.9万</h2>
        <h3>累计人气</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PipiDeaHeader",

  data() {
    return {};
  },
  props:['arr'],
  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
    .recomIl h1 {
  font-weight: 700;
  font-size: 24px;
  margin: 12px 0;
}
.recomIl {
  /* height: 260px; */
  margin: 8px 12px;
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
  margin-bottom: 48px;
}
.recomIl .right h3 {
  color: #888;
  margin-bottom: 6px;
  height: 24px;
  line-height: 24px;
}
.vipBox {
  margin: 8px 12px;
  height: 40px;
  background-color: #494949;
  line-height: 40px;
  color: #dfd1c6;
  font-size: 16px;
  padding-left: 15px;
  border-radius: 3px;
}
.vipBox .icon-xiayibu {
  float: right;
  color: #fff;
  margin-right: 15px;
}
.vipBox .icon-zuanshi_o {
  color: #eebc61;
  margin-right: 8px;
}
.ping {
  display: flex;
  justify-content: space-around;
  height: 50px;
  padding: 20px 0 10px 12px;
  border-bottom: 8px solid #efefef;
}
.ping li h2 {
  font-size: 20px;
  color: #000;
  height: 30px;
  line-height: 30px;
  position: relative;
}
.ping li h2 img {
  position: absolute;
  bottom: 3px;
  left: 35px;
}
.ping li h3 {
  font-size: 14px;
  color: #aaa;
}
.ping li:nth-child(1) {
  width: 40%;
}
.ping li:nth-child(2) {
  width: 30%;
}
.ping li:nth-child(3) {
  width: 30%;
}
</style>