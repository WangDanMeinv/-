<template>
<!-- 阅读偏好栏 -->
  <div>
    <h1>
      <i class="iconfont icon-aihao"></i>
      阅读偏好
      <p class="next">></p>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
h1 {
  height: 40px;
  // background-color: rgb(169, 52, 253);
  .iconfont {
    display: inline-block;
    width: 20px;
    height: 30px;
    color: green;
    font-size: 30px;
    line-height: 40px;
    margin-right: 1rem;
    margin-left: -2px;
    vertical-align: bottom;
  }
  .next {
    float: right;
    font-family: serif;
    color: grey;
    font-weight: bold;
    font-size: 20px;
    // margin-right: 5vw;
    line-height: 40px;
  }
}
</style>