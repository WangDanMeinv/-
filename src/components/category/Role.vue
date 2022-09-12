<template>
  <div class="banxin1">
    <TopBar :msg="msg"></TopBar>
    <Header :zhutiInfo1="zhutiInfo1" :zhutiInfo="zhutiInfo"></Header>
    <Type></Type>
    <BooksList :booksList="booksList" :booksList1="booksList1"></BooksList>
  </div>
</template>
<script>
import TopBar from "./components/TopBar.vue";
import Header from "./components/Header.vue";
import Type from "./components/Type.vue";
import BooksList from "./components/BooksList.vue";
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
      msg: "角色",
      booksList: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_14759046205693204/90",
          tit: "当了皇帝的冯丞",
          author: "九五 | 连载中 · 93.3万人气",
          pf: 9.8,
          des: "世界佣兵之王，龙牙特战队前任总教官，因任务失败，从而回到都市想过普通人的生活，偏偏天不遂人愿，总有一天我要拿回属于我自己的",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "角色",
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
          tit: "角色1",
          author: "九五 | 连载中 · 93.3万人气",
          pf: 9.8,
          des: "世界佣兵之王，龙牙特战队前任总教官，因任务失败，从而回到都市想过普通人的生活，偏偏天不遂人愿，总有一天我要拿回属于我自己的",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "冯丞老婆",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "冯丞妻子",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "鱼松妻子",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "于松漂亮妻子",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23319292109087304/90",
          tit: "漂亮妻子",
          author: "冯丞 | 完结 · 1000万人气",
          pf: 8.8,
          des: "众所周知，姜染声名狼藉，黑料无数，人人都想她滚出娱乐圈。",
        },
      ],
      zhutiInfo: [
        "扮猪吃虎",
        "修仙",
        "天才",
        "战神",
        "神医",
        "赘婿",
        "特种兵",
        "学霸",
      ],
      zhutiInfo1: [
        "豪门总裁",
        "女强",
        "萌宝",
        "扮猪吃虎",
        "腹黑",
        "嫡女",
        "王妃",
        "皇后",
        "公主",
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.banxin1 {
  // width: 94%;
  //  margin: 0 auto;
    height: 100vh;
  background: rgb(246, 246, 246);

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
          line-height: 20px;
          font-size: 0.8rem;
        }
        .author {
          color: rgb(161, 161, 161);
        }
      }
    }
  }
}
</style>