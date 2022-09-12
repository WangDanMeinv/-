<template>
  <!-- 是否显示隐藏男生爱读的书籍 -->
  <div>
    <div class="novalContent">
      <ul class="sideBar">
        <li><a href="#">阅读榜</a></li>
        <li><a href="#">人气榜</a></li>
        <li><a href="#">完结榜</a></li>
        <li><a href="#">高分榜</a></li>
      </ul>
    </div>
    <fenLei :newBooks="newBooksList"></fenLei>
  </div>
</template>

<script>
import fenLei from "@/components/shopBook/fenlei.vue";
export default {
  name: "PipiNan",

  data() {
    return {
      newBooksList: []
    };
  },

  methods: {
    //定义方法
    getNanList() {
      //使用axios接口信息
      this.$axios.get("http://localhost:8088/bookshop/rank").then((res) => {
        console.log(res.data);
        this.newBooksList = res.data.newBokksList;
      });
    },
  },
  // 什么周期是用方法
  mounted() {
    this.getNanList();
  },
  components: {
    fenLei,
  },
};
</script>

<style lang="less" scoped>
.novalContent {
  text-align: center;
  width: 100%;
  padding-top: 16px;

  .sideBar {
    width: 7rem;
    height: 100vh;
    border-right: 0.05rem solid rgb(218, 213, 213);
    margin-top: 3rem;
    position: fixed;
    top: 0;
    li {
      height: 3rem;
      line-height: 3rem;
      a {
        font-size: 1.3rem;
        color: gray;
        margin: 1.1rem;
      }
    }
  }
}
</style>