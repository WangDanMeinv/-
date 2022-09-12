<template>
  <div class="banxin1">
    <!-- 男性榜单 -->
  
      <TopBar :msg="msg"></TopBar>
      <Header :zhutiInfo="zhutiInfo" :zhutiInfo1="zhutiInfo1"></Header>
      <Type></Type>
      <BooksList  :booksList="booksList" :booksList1="booksList1"></BooksList>
      <!-- 图片文字 -->
  
  </div>
</template>
<script>
import TopBar from "./components/TopBar.vue";
import Header from "./components/Header.vue";
import Type from "./components/Type.vue";
import BooksList from "./components/BooksList.vue"
export default {
  name: "Theme",
  components: {
    TopBar,
    Header,
    Type,
    BooksList,
  },
  data() {
    return {
      msg: "情节",
      booksList: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_14759046205693204/90",
          tit: "重生之冯丞是玉皇大帝",
          author: "九五 | 连载中 · 93.3万人气",
          pf: 9.8,
          des: "世界佣兵之王，龙牙特战队前任总教官，因任务失败，从而回到都市想过普通人的生活，偏偏天不遂人愿，总有一天我要拿回属于我自己的",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "情节",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "卡哇伊天仙下凡",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "丹丹在修仙",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "我的漂亮妻子",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "我的漂亮妻子",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
      ],
      booksList1: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_14759046205693204/90",
          tit: "少爷，夫人又逃了",
          author: "九五 | 连载中 · 93.3万人气",
          pf: 9.8,
          des: "世界佣兵之王，龙牙特战队前任总教官，因任务失败，从而回到都市想过普通人的生活，偏偏天不遂人愿，总有一天我要拿回属于我自己的",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "农女为难",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "强欢成爱",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
      ],

      zhutiInfo: [
        "无敌",
        "都市修真",
        "穿越",
        "诸天万界",
        "重生",
        "灵异",
        "系统",
        "无限流",
        "神豪",
        "网游",
      ],
      zhutiInfo1: [
        "甜宠",
        "穿越",
        "先婚后爱",
        "虐恋",
        "1v1",
        "重生",
        "复仇",
        "娱乐圈",
        "家庭",
        "医术",
      ],
    };
  },
};
</script>

<style lang="less" scoped>

.banxin1 {
  
  height: 100vh;
  background: rgb(246, 246, 246);
  //  margin: 0 auto;
  text-align: center;
  .topBar {
    height: 4rem;
    line-height: 4rem;
    // background: red;

    border-bottom: 0.05rem solid rgb(204, 204, 204);
    .back {
      float: left;
      font-size: 2rem;
      margin-left: 1rem;
      font-family: serif;
    }
    .tit {
      text-align: center;
      font-size: 1.4rem;
    }
    .iconfont {
      float: right;
      font-size: 2rem;
      margin-right: 1rem;
    }
  }

  .fenleiBox {
    height: 5rem;
    line-height: 2.5rem;
    background: rgb(243, 243, 243);
    .topFenlei {
      padding-right: 1rem;
      li {
        padding-left: 1rem;
        //   background: lightcoral;
        text-align: left;
        float: left;
        font-size: 14px;
        //   padding-left:1rem ;
        font-weight: bold;
      }
    }
  }
  .bookType {
    height: 2.5rem;
    // background: red;

    li {
      float: left;
      padding: 0 8px;
      line-height: 2.5rem;
    }
  }
  .bookContent {
    width: 100%;
    li {
      height: 7rem;
      padding: 0 1rem;
      // background: lightcoral;
      margin-top: 1rem;
      text-align: left;
      img {
        height: 100%;
        float: left;
      }

      .imgContent {
        padding: 0 0 0 6rem;
        .bookName {
          font-size: 1.3rem;
          font-weight: bold;
        }
        .bookPingfen {
          float: right;
          color: red;
        }
        .bookDes {
          margin: 1rem 0;
          font-size: 0.8rem;
          line-height: 20px;
          color: rgb(121, 120, 120);
        }
        .author {
          color: rgb(161, 161, 161);
        }
      }
    }
  }
}
</style>