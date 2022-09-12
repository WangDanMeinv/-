<template>
  <!-- 充值页面 -->
  <div class="all">
    <h1>
      <span class="iconfont icon-shangyibu" @click="$router.go(-1)"></span>
      <span class="invest">充值</span>
    </h1>
    <h2>余额：<span class="yue">74</span>书币</h2>
    <div class="w">
      <div class="chongzhi">
        <h3>请选择充值金额(1元=100书币)</h3>
        <!-- 充值栏 -->
        <div>
          <span class="shubi">
            <p><span class="num">500</span><span class="shu">书币</span></p>
            <p>
              <span class="put">送0书币</span> <span class="price">￥5</span>
            </p>
          </span>
          <span class="shubi">
            <p><span class="num">1000</span><span class="shu">书币</span></p>
            <p>
              <span class="put">送300书币</span> <span class="price">￥1</span>
            </p>
          </span>
          <span class="shubi">
            <p><span class="num">2000</span><span class="shu">书币</span></p>
            <p>
              <span class="put">送1000书币</span> <span class="price">￥2</span>
            </p>
          </span>
          <span class="shubi">
            <p><span class="num">3000</span><span class="shu">书币</span></p>
            <p>
              <span class="put">送2000书币</span> <span class="price">￥3</span>
            </p>
          </span>
          <span class="shubi">
            <p><span class="num">5000</span><span class="shu">书币</span></p>
            <p>
              <span class="put">送5000书币</span> <span class="price">￥5</span>
            </p>
            <span class="fire">火爆</span>
          </span>

          <span class="shubi">
            <p><span class="num">10000</span><span class="shu">书币</span></p>
            <p>
              <span class="put">送10000书币</span>
              <span class="price">￥10</span>
            </p>
          </span>
          <span class="shubi">
            <p><span class="num">20000</span><span class="shu">书币</span></p>
            <p>
              <span class="put">送20000书币</span>
              <span class="price">￥20</span>
            </p>
          </span>
        </div>
      </div>
    </div>
    <!-- 充值记录 -->
    <h4>
      <i class="iconfont icon-wumulu"></i>
      充值记录
      <p class="next">></p>
    </h4>
    <h4>
      <i class="iconfont icon-zuanshi_o"></i>
      消费记录
      <p class="next">></p>
    </h4>
    <!-- 温馨提示 -->
    <p class="point">
      温馨提示：<br />
      1.赠送书币有效期为7天，过期后会自动失效，订阅章节时会优先扣除距离过期时间最近的书币。<br />
      2.在充值期间遇到任何问题，请在我的-意见反馈进行反馈<br />
      3.虚拟商品购买后不可退换
    </p>
  </div>
</template>
<style scoped lang="less">
.all {
  background-color: rgb(250, 250, 250);
  h1 {
    border-bottom: 1px solid rgb(138, 136, 136);
    background-color: rgb(246, 246, 246);
    padding-top: 18px;
    .invest {
      margin-left: 40vw;
      line-height: 30px;
    }
  }
  h2 {
    height: 2rem;
    line-height: 2rem;
    padding-left: 5vw;
    background-color: rgb(246, 246, 246);
    .yue {
      font-weight: bold;
    }
  }

  .w {
    width: 90%;
    margin: 0 auto;
    .chongzhi {
      //   height: 60vh;
      h3 {
        height: 2.5rem;
        line-height: 2.5rem;
      }
      .shubi {
        position: relative;
        display: inline-block;
        width: 38vw;
        height: 4rem;
        margin-left: 4vw;
        margin-right: 4vw;
        border: 1px solid rgb(180, 178, 178);
        margin-bottom: 15px;
        border-radius: 5px;
        &:nth-child(2n-1) {
          margin-left: 0;
        }
        &:last-child {
          margin-bottom: 20px;
        }
        p {
          margin-top: 0.5rem;
          .num {
            margin-left: 2vw;
            padding-top: 2rem;
            font-size: 20px;
            font-weight: bold;
          }
          .put {
            margin-left: 2vw;
            font-size: 13px;
            color: rgb(240, 21, 21);
          }
          .price {
            float: right;
            margin-right: 2vw;
            font-weight: bold;
            font-size: 14px;
          }
        }
        .fire {
          position: absolute;
          top: 0;
          right: 0;
          display: inline-block;
          width: 50px;
          height: 20px;
          text-align: center;
          background-color: red;
          color: rgb(252, 250, 250);
          font-size: 12px;
          line-height: 20px;
          border-bottom-left-radius: 5px;
          border-top-right-radius: 5px;
          margin-right: -1px;
        }
      }
    }
  }
}
h4 {
  height: 50px;
  //   background-color: rgb(169, 52, 253);
  border-top: 1px solid rgb(180, 178, 178);
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
.point {
  padding: 0 5vw;
  line-height: 25px;
  color: darkgrey;
  font-size: 14px;
  padding-top: 20px;
  border-top: 1px solid rgb(180, 178, 178);
}
</style>