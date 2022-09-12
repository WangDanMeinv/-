<template>
  <div>
     
    <div class="topBar">
      <span to="/theme" tag="li" class="back" @click="$router.go(-1)"
        >&lt;</span>
      <span class="tit" :msg="msg">{{ msg }}</span>
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style scoped lang="less">

.topBar {
  height: 4rem;
  position: fixed;
  top: 0;
  z-index: 99;
  left: 0;
  right: 0;
    background: rgb(248, 248, 248);


  line-height: 4rem;
  //background: red;

  border-bottom: 0.05rem solid rgb(204, 204, 204);
  .back {
    float: left;
    font-size: 2rem;
    margin-left: 1rem;
    font-family: serif;
  }
  .tit {
    text-align: center;
    font-size: 1.4rem;
  }
  .iconfont {
    float: right;
    font-size: 2rem;
    margin-right: 1rem;
  }
}
</style>