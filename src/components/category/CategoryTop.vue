<template>
    <div>
         <div class="topBar clear">
        <section class="top-bar">
          <span :class="{write:isCss}"  @click.prevent="$store.state.isShowBooks = true"  @click="isCss=true">男生</span>
         <span  :class="{write:!isCss}" @click.prevent="$store.state.isShowBooks = false"  @click="isCss=false">女生</span>
          <i class="iconfont icon-sousuo"></i>
        </section>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      isCss:true,
    }
  }
}
</script>
<style lang="less" scoped>
 a {
    color: gray;
  }
    .write{
      font-weight:500 ;
      font-size: 1.2rem;
    }
    /* 顶部栏 */
    .topBar {
      width: 100%;
      height: 3rem;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      // padding-top:.5rem ;
      text-align: center;
      background: white; /* 顶部栏颜色 */
      border-bottom: 0.05rem solid rgb(218, 213, 213);
      .top-bar {
        width: 95%;
        line-height: 3rem;
        margin: 0 auto;
        // background: green;
         .write{
      font-weight:550 ;
      font-size: 1.4rem;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
;
    }
        span {
          font-size: 1.1rem;
          margin:0 .7rem;
        }
        .iconfont {
          float: right;
          font-size:1.8rem ;
        }
      }
    }
</style>