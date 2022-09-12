<template>
  <div class="classfy">
    <div class="mask"></div>
    <span class="jiantou"></span>
    <div class="sizer">
        <div class="shai1">
            <p>全部书籍</p>
        </div>
        <span class="lan1">更新状态</span>
        <div class="shai2">
            <p>3日内更新</p>
        </div>
        <div class="shai3">
            <p>7日内更新</p>
        </div>
        <span class="lan2">阅读进度</span>
        <div class="shai4">
            <p>尚未阅读</p>
        </div>
        <div class="shai5">
            <p>正在阅读</p>
        </div>
        <div class="shai6">
            <p>已读完</p>
        </div>
        <span class="lan3">阅读进度</span>
        <div class="shai7">
            <p>本地书</p>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less">
.classfy {
  .sizer {
    position: absolute;
    right: 0;
    top: 41px;
    opacity: 1;
    z-index: 1;
    margin-left: 5vw;
    width: 90vw;
    height: 322px;
    background-color: white;
    position: relative;
     .shai1{
         width: 100px;
         height: 25px;
         background-color: rgb(179, 185, 185);
         position: absolute;
         top:30px;
         left:30px;
         text-align: center;
         line-height: 25px;
         border-radius:  15px ;
     }
     .lan1{
         position: absolute;
         top:90px;
         left:30px;
     }

     .shai2{
          width: 100px;
         height: 25px;
         background-color: rgb(179, 185, 185);
         position: absolute;
         top:115px;
         left:30px;
         text-align: center;
         line-height: 25px;
         border-radius:  15px ;
     }
     .shai3{
          width: 100px;
         height: 25px;
         background-color: rgb(179, 185, 185);
         position: absolute;
         top:115px;
         left:140px;
         text-align: center;
         line-height: 25px;
         border-radius:  15px ;
     }
     .lan2{
         position: absolute;
         top:159px;
         left:30px;
     }
     .shai4{
          width: 100px;
         height: 25px;
         background-color: rgb(179, 185, 185);
         position: absolute;
         top:190px;
         left:30px;
         text-align: center;
         line-height: 25px;
         border-radius:  15px ;
     }
     .shai5{
          width: 100px;
         height: 25px;
         background-color: rgb(179, 185, 185);
         position: absolute;
         top:190px;
         left:140px;
         text-align: center;
         line-height: 25px;
         border-radius:  15px ;
     }
     .shai6{
          width: 100px;
         height: 25px;
         background-color: rgb(179, 185, 185);
         position: absolute;
         top:190px;
         left:250px;
         text-align: center;
         line-height: 25px;
         border-radius:  15px ;
     }
     .lan3{
         position: absolute;
         top:236px;
         left:30px;
     }
     .shai7{
          width: 100px;
         height: 25px;
         background-color: rgb(179, 185, 185);
         position: absolute;
         top:265px;
         left:30px;
         text-align: center;
         line-height: 25px;
         border-radius:  15px ;
     }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .jiantou {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 1;
    z-index: 1;
    right: 95px;
    top: 21px;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    border-left: 10px solid transparent;
  }
}
</style>