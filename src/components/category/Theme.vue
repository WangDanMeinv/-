<template>
  <div class="banxin1">
    <TopBar :msg="msg"></TopBar>
    <Header :zhutiInfo="zhutiInfo" :zhutiInfo1="zhutiInfo1"></Header>
    <Type></Type>
      <BooksList  :booksList="booksList" :booksList1="booksList1"></BooksList>
    
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
    Type,BooksList
  },
  data() {
    return {
      msg: "主题",
      booksList: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_14759046205693204/90",
          tit: "主题",
          author: "九五 | 连载中 · 93.3万人气",
          pf: 9.8,
          des: "世界佣兵之王，龙牙特战队前任总教官，因任务失败，从而回到都市想过普通人的生活，偏偏天不遂人愿，总有一天我要拿回属于我自己的",
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
          tit: "娇妻在上",
          author: "九五 | 连载中 · 93.3万人气",
          pf: 9.8,
          des: "世界佣兵之王，龙牙特战队前任总教官，因任务失败，从而回到都市想过普通人的生活，偏偏天不遂人愿，总有一天我要拿回属于我自己的",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "盛少的千亿娇妻",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "总裁爹地请接招",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "大佬掌心娇",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "陆少的甜宠娇妻",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "幸运三宝",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
      ],
      zhutiInfo: [
        "都市生活",
        "奇幻玄幻",
        "悬疑灵异",
        "武侠仙侠",
        "游戏体育",
        "科幻末世",
        "东方玄幻",
        "历史军事",
       
      ],
      zhutiInfo1: ["现代言情", "古代言情", "幻想言情", "短篇精品", "快穿同人"],
    };
  },
};
</script>
<style lang="less" scoped>
.banxin1 {
  // width: 94%;
  text-align: center;
    height: 100vh;
  background: rgb(246, 246, 246);

  //  margin: 0 auto;
  .topBar {
    height: 4rem;
    line-height: 4rem;
    // background: red;

    border-bottom: 0.05rem solid rgb(204, 204, 204);
    .back {
      float: left;
      font-size: 2rem;
      font-family: serif;
      margin-left: 1rem;
    }
    .tit {
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
      padding: 0 1rem;
      li {
        width: 19%;
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
        }
        .author {
          color: rgb(161, 161, 161);
        }
      }
    }
  }
}
</style>