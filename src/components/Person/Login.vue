<template>
<!-- 登录功能栏 -->
  <div class="login" @click="$router.push('/logging')">
    <!-- 头像 -->
    <span class="touxiang">
      <img src="../../assets/images/head-photo.webp" alt="" />
    </span>
    <!-- 网名 -->
    <p class="name">游客_23412</p>
    <p class="next">></p>
  </div>
</template>
<script>
export default {
  methods:{
   
  }
}
</script>
<style scoped lang="less">
.login {
  height: 6rem;
  margin-top: 1rem;
  // background-color: pink;
  .touxiang {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-left: 14px;
    margin-top: 10px;
    overflow: hidden;
    // background-color: purple;
    img {
      width: 5rem;
      height: 5rem;
      margin-left: 0;
    }
  }
  .name {
    display: inline-block;
    vertical-align: top;
    margin-top: 4.5vh;
    margin-left: 3vw;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .next {
    float: right;
    font-family: serif;
    color: grey;
    font-weight: bold;
    font-size: 20px;
    margin-top: 5vh;
    margin-right: 5vw;
  }
}
</style>