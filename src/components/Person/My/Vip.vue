<template>
  <div>
    <!-- 会员栏 -->
    <div class="kuang1">
      <h1>
        <span class="iconfont icon-shangyibu" @click="$router.go(-1)"></span
        ><span class="invest">VIP会员</span>
      </h1>
      <div class="top">
        <!-- 头像 -->
        <div class="ka">
          <span class="touxiang">
            <img src="../../../assets/images/head-photo.webp" alt="" />
          </span>
          <!-- 网名 -->
          <span class="right">
            <p class="name">游客_23412</p>
            <br />
            <p class="novip">未开通vip</p>
          </span>
        </div>
      </div>
      <div class="w">
        <div class="buttom">
          <span class="buju">
            <span class="mask">
              <span class="iconfont icon-zuanshi_o"></span> </span
            ><br />
            <p>免费阅读</p>
          </span>
          <span>
            <span class="mask">
              <span class="iconfont icon-zuanshi_o"></span> </span
            ><br />
            <p>免费听书</p>
          </span>
          <span>
            <span class="mask">
              <span class="iconfont icon-zuanshi_o"></span> </span
            ><br />

            <p>尊贵标识</p>
          </span>
          <span>
            <span class="mask">
              <span class="iconfont icon-zuanshi_o"></span> </span
            ><br />

            <p>敬请期待</p>
          </span>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="content">
      <div class="w">
        <span class="year">
          <h3>VIP包年会员</h3>
          <p class="p1"><span>￥</span><em class="p2">399</em></p>
          <p class="yuanjia">￥399.0</p>
        </span>
        <h4 class="one">
          <i class="iconfont icon-weixin"></i>
          微信支付
          <p class="next"><input type="checkbox" name="" id="" /></p>
        </h4>
        <h4>
          <i class="iconfont icon-huanyihuan"></i>
          支付宝
          <p class="next"><input type="checkbox" name="" id="" /></p>
        </h4>
        <button class="kaitong">立即开通</button>
        <div class="note">
          会员服务说明 <br />
          1.购买前，请自习阅读并同意《用户协议》和《隐私策略》。 <br />
          2.会员服务开通后，无论您是否在相应服务器内实际使用该服务，鉴于网络服务性质特殊属于不宜退货商品，不适用无理由退换规定。
          <br />
          3.对会员服务有任何疑问，如会员充值错误问题，请联系在线客服微信：xiaoshuo2022
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.w {
  width: 90%;
  margin: 0 auto;
}
h1 {
  background-color: rgb(39, 37, 37);
  padding-top: 18px;
  color: white;
  position: fixed;
  top: 0;
  width: 100vw;
  .invest {
    margin-left: 40vw;
    line-height: 30px;
  }
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  background-color: transparent;
  -webkit-appearance: none;
  border: 1px solid #c9c9c9;
  border-radius: 50px;
  outline: none;
  vertical-align: middle;
  &:checked {
    background: url("../../../assets/images/check.jpg") no-repeat;
    background-size: 20px 20px;
    background-position: -1px -1px;
  }
}

.kuang1 {
  background-color: rgb(39, 37, 37);
  height: 19.4rem;
  margin-top: 3rem;
  .top {
    background-color: blanchedalmond;
    border-radius: 5px;
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
    height: 6.6rem;
    .touxiang {
      display: inline-block;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin-left: 14px;
      margin-top: 10px;
      overflow: hidden;
      background-color: purple;
      img {
        width: 5rem;
        height: 5rem;
        margin-left: 0;
      }
    }
    .right {
      vertical-align: top;
      //   background-color: chocolate;
      display: inline-block;
      .name {
        display: inline-block;

        margin-top: 4.5vh;
        margin-left: 3vw;
        font-weight: bold;
        font-size: 1rem;
      }
      .novip {
        display: inline-block;
        font-style: 14px;
        margin-left: 3vw;
        margin-top: 0.5vh;
        color: rgb(110, 98, 90);
      }
    }
  }
  .buttom {
    color: blanchedalmond;
    text-align: center;
    justify-content: space-between;
    display: flex;
    .mask {
      margin-top: 24px;
      background-color: rgba(255, 255, 255, 0.1);
      display: inline-block;
      width: 30px;
      height: 30px;
      font-size: 1.8rem;
      border-radius: 50%;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      display: inline;
      color: white;
    }
  }
}
.content {
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  margin-top: -20px;
  // border:1px solid transparent;
  .year {
    text-align: center;
    border-radius: 10px;
    margin-top: 20px;
    display: inline-block;
    width: 25vw;
    height: 6.5rem;
    background-color: blanchedalmond;
    h3 {
      padding-top: 10px;
      font-size: 15px;
      line-height: 30px;
      color: rgb(143, 95, 33);
    }
    .p1 {
      font-weight: bold;
      line-height: 30px;
      .p2 {
        font-size: 20px;
      }
    }
    .yuanjia{
        text-decoration: line-through;
      }
    p {
      font-size: 12px;
      color: rgb(86, 90, 94);
     
    }
  }
  h4 {
    height: 50px;
    //   background-color: rgb(169, 52, 253);
    // border-bottom: 1px solid rgb(192, 192, 192);
    .iconfont {
      display: inline-block;
      width: 20px;
      height: 30px;
      color: rgb(70, 70, 70);
      font-size: 30px;
      line-height: 50px;
      margin-right: 1rem;
      margin-left: -2px;
      vertical-align: bottom;
      padding-left: 5%;
    }
    .last {
      border-bottom: 1px solid red;
    }
    .next {
      float: right;
      font-family: serif;
      color: grey;
      font-weight: bold;
      font-size: 20px;
      line-height: 50px;
      padding-right: 5vw;
    }
  }
  .one {
    border-bottom: 1px solid rgb(192, 192, 192);
  }
  .kaitong {
    width: 100%;
    height: 2.4rem;
    border-radius: 20px;
    background-color: rgb(39, 37, 37);
    color: rgb(218, 203, 184);
  }
  .note {
    border-top: 1px solid rgb(192, 192, 192);
    margin-top: 20px;
    line-height: 28px;
    color: rgb(110, 98, 90);
  }
}
</style>