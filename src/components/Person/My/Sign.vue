<template>
<!-- 签到页 -->
    <div>
        <h1>
        <span class="iconfont icon-shangyibu" @click="$router.go(-1)"></span
        ><span class="invest">签到</span>
      </h1>
    </div>
</template>
<style lang="less" scoped>
h1 {
  padding-top: 18px;
  color: white;
  position: fixed;
  top: 0;
  width: 100vw;
  border-bottom: 1px solid rgb(80, 79, 79);
  .invest {
    margin-left: 40vw;
    line-height: 30px;
    color: black;
 }
}
</style>