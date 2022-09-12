<template>
<!-- 历史记录栏 -->
  <div>
    <h1>
      <i class="iconfont icon-yunlishi"></i>
      阅读历史
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
  // background-color: rgb(204, 180, 221);
  .iconfont {
    display: inline-block;
    width: 20px;
    height: 30px;
    color: green;
    line-height: 40px;
    margin-right: 1rem;
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