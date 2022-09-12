<template>
  <div class="paihang">
    <!-- 固定的顶部栏 -->
    <div class="topBar clear">
      <section class="top-bar">
        <span class="back" @click="$router.push('/bookshop')">＜</span>
        <a href="#" @click.prevent="isShowBooks = true">男生</a>
        <a href="#" @click.prevent="isShowBooks = false">女生</a>
      </section>

      <!-- 是否显示隐藏男生爱读的书籍 -->
      <div v-show="isShowBooks">
        <div class="novalContent">
          <ul class="sideBar">
            <li @click="$router.push('/read/readContent')"><a href="">阅读榜</a></li>
            <li><a href="">人气榜</a></li>
            <li><a href="">完结榜</a></li>
            <li><a href="">高分榜</a></li>
          </ul>
        </div>
        <div class="content1">
          <!-- 主题锚链接 -->
           <p>男生榜单</p>
          <router-view></router-view>
          
        </div>
      </div>
    </div>
    <!-- 是否显示隐藏女生爱读的书籍 -->
    <div v-show="!isShowBooks">
      <div class="novalContent">
        <ul class="sideBar">
          <li ><a href="#">阅读榜</a></li>
          <li><a href="#">人气榜</a></li>
          <li><a href="#">完结榜</a></li>
          <li><a href="#">高分榜</a></li>
        </ul>

        <div class="content1">
          <!-- 主题锚链接 -->
          <p class="title1">女生榜单</p>
          <router-view></router-view>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowBooks: true,
      newBooksList: [
        {
          tit: "至尊九龙",
          des: "六年前，我加入了特种兵部队",
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22424827601479404/90",
        },
        {
          tit: "白月光拿了反派剧本",
          des: "六年前，我加入了特种兵部队",
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23249523009849604/90",
        },
        {
          tit: "至尊九龙",
          des: "六年前，我加入了特种兵部队",
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22139735609273504/90",
        },
        {
          tit: "至尊九龙",
          des: "六年前，我加入了特种兵部队",
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23214684209502304/90",
        },
      ],
      newBooksList1: [
        {
          tit: "帅老公",
          des: "六年前，我加入了特种兵部队",
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22424827601479404/90",
        },
        {
          tit: "初恋男朋友",
          des: "六年前，我加入了特种兵部队",
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23249523009849604/90",
        },
        {
          tit: "女孩子喜欢看的书",
          des: "六年前，我加入了特种兵部队",
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22139735609273504/90",
        },
        {
          tit: "女人花",
          des: "六年前，我加入了特种兵部队",
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23214684209502304/90",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
a {
  color: gray;
}
.paihang {
  text-align: center;
  .topBar {
    width: 100%;
    height: 3rem;
    position: fixed;
    z-index: 1;
    background: white; /* 顶部栏颜色 */
    border-bottom: 0.05rem solid rgb(218, 213, 213);
    .back {
      float: left;
      font-size: 2rem;
    }
    .top-bar {
      width: 95%;
      line-height: 3rem;
      margin: 0 auto;
      // background: green;
      a {
        font-size: 1.3rem;
        margin: 1.1rem;
      }
    }
  }
  .novalContent {
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
      }
    }
  }
}
.title1{
  padding-top:3rem ;
}
</style>