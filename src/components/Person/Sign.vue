<template>
<!-- 签到栏 -->
  <div>
    <h1 @click="$router.push('/sign')">
      <i class="iconfont icon-daka"></i>
      签到/活动
      <p class="next">></p>
    </h1>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="less">
h1 {
  margin-top: 20px;
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