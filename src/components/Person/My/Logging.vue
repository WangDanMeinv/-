<template>
<!-- 登录功能板块 -->
  <div>
    <br />
    <h1><span class="iconfont icon-shangyibu" @click="$router.go(-1)"></span></h1>
    <br />
    <!-- 静态引用图片 -->
    <img src="../../../assets/images/pipi.jpg" alt="" />
    <div class="w">
      <input
        type="text"
        name=""
        id=""
        placeholder="请输入手机号码"
        class="inp"
      /><br />
      <input type="text" name="" id="" placeholder="请输入验证码" class="inp" />
      <button class="yanzheng">获取验证码</button><br /><br /><br />
      <label for="check"></label>
      <input type="checkbox" name="" id="check" class="check" />
      <span class="aready">已阅读并同意用户协议和隐私政策</span>
      <br /><br />
      <button class="login">登录</button>
      <br>
      <i class="iconfont icon-weixin"></i>
    </div>
  </div>
</template>
<style scoped lang="less">
.w {
  width: 90%;
  margin: 35px auto;
  position: relative;
  .inp {
    border: 0;
    line-height: 35px;
    padding-top: 10px;
    border-bottom: 0.5px solid rgb(184, 182, 182);
    width: 100%;
  }
  .yanzheng {
    position: absolute;
    top: 57px;
    right: 0;
    background-color: #fff;
    border-radius: 5px;
    border: 0.5px solid rgb(134, 123, 123);
    line-height: 25px;
    padding: 0 6px;
    color: rgb(53, 66, 78);
  }
  .check {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .aready {
    margin-left: 2px;
    vertical-align: middle;
  }
  .login {
    display: inline-block;
    width: 100%;
    height: 2.7rem;
    background-color: rgb(238, 138, 138);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 17px;
  }
  i {
    position: absolute;
    top: 370px;
    font-size: 3rem;
    margin-left: 40vw;
    color: rgb(107, 224, 107);
  }
}
img {
  width: 20vw;
  display: inline-block;
  margin-left: 40vw;
  border-radius: 20px;
}
</style>