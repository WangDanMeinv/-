<template>
    <div class="footer">
        <div class="foot ban">
        <div class="join">
          <i class="iconfont icon-jiarushujia_01"></i>
          <p>加入书架</p>
        </div>
        <div class="cont">
          <i class="iconfont icon-erji"></i>
          <p>听书</p>
        </div>
        <div class="read ">
          <span>立即阅读</span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PipiDeaButtom",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped>
.footer{
    height: 60px;
    width: 100vw;
    background-color: #fff;
    border-top: 1px solid #ccc;
    position:fixed;
    bottom: 0;
    text-align: center;
}
.footer .foot{
    display: flex;
    font-size: 12px;
    margin-top: 5px;
}
.footer .foot .join{
    width: 25vw;
}
.footer .foot p{
  font-size: 20px;
  margin-top: 5px;
  color: #000;
}
.footer .foot .iconfont{
    color: red;
    font-size: 28px;
}
.footer .foot .cont{
    width: 25vw;
}
.footer .foot .read{
    width: 50vw;

    border-radius: 25px ;
    height: 50px;
    color: #eee;
    font-size: 26px;
    line-height: 50px;
    background-color: rgb(249, 11, 11);
}
</style>
