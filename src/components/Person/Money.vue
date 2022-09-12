<template>
<!-- 会员栏 -->
  <div class="money">
    <span>
      <div class="left">
        <p class="q">余额</p>
        <p class="b">74书币</p>
        <div class="o" @click="$router.push('/invest')">充值</div>
      </div>
    </span>
    <div class="xian"></div>
    <span>
      <div class="right">
        <p class="q">会员</p>
        <p class="b">尊贵VIP，全场无广告</p>
        <div class="o" @click="$router.push('/vip')">开通</div>
      </div>
    </span>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="less">
.money {
  justify-content: space-between;
  display: flex;
  height: 7.6rem;
  // box-shadow: 0px 20rem 0px 0px rgb(0, 0, 0, 0.2);
    box-shadow: 0px 17px 10px 0px rgb(247, 243, 243);
  span {
    display: inline-block;
    width: 90%;
    height: 7.6rem;
    margin-top: 0.6rem;
    // background-color: lightskyblue;
    //   text-align: center;
    .left,
    .right {
      margin-left: 50px;
      .q {
        font-size: 1.3rem;
        font-weight: bold;
        line-height: 26px;
      }
      .b {
        font-size: 10px;
        color: dimgray;
        line-height: 25px;
      }
      .o {
        display: inline-block;
        width: 62px;
        height: 26px;
        border: 1px solid red;
        border-radius: 20px;
        line-height: 26px;
        text-align: center;
        // background-color: green;
      }
    }
  }
  .xian {
    display: inline-block;
    width: 2px;
    height: 60px;
    margin-top: 24px;
    background-color: darkgoldenrod;
  }
}
</style>