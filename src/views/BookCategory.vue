<template>
  <div class="gategory">
    <CategoryTop></CategoryTop>
    <CategoryContent
      :zhuti="zhuti"
      :qingjie="qingjie"
      :jiaose="jiaose"
      :zhuti1="zhuti1"
      :qingjie1="qingjie1"
      :juese1="juese1"
      :sideNav="sideNav"
    ></CategoryContent>
  </div>
</template>
  <script>
import CategoryContent from "@/components/category/CategoryContent.vue";
import CategoryTop from "@/components/category/CategoryTop.vue";
export default {
  components: { CategoryTop, CategoryContent },
  data() {
    return {
     sideNav:[{tit:"主题",href:"#zhuti"},{tit:"情节",href:"#qingjie"},{tit:"角色",href:"#juese"}],
      zhuti: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22424827601479404/90",
          tit: "都市生活",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "奇幻玄幻",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "悬疑灵异",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "武侠仙侠",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "游戏体育",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "科幻末世",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "东方玄幻",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "历史军事",
        },
      ],
      qingjie: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "无敌",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "都市修真",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "穿越",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "诸天万界",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "重生",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "灵异",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "系统",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "无限流",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "神豪",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "网游",
        },
      ],
      jiaose: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22424827601479404/90",
          tit: "扮猪吃虎",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "修仙",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "天才",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "战神",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22313302009382504/90",
          tit: "神医",
        },
      ],
      juese1: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "豪门总裁",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22133666001183704/90",
          tit: "女强",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23479637009628504/90",
          tit: "萌宝",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "扮猪吃虎",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "腹黑",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "嫡女",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23479637009628504/90",
          tit: "王妃",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "皇后",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "公主",
        },
      ],
      zhuti1: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "现代言情",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "古代言情",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "幻想言情",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "短篇精品",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "快穿同人",
        },
      ],
      qingjie1: [
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "甜宠",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22133666001183704/90",
          tit: "穿越",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23479637009628504/90",
          tit: "先婚后爱",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22109307301720304/90",
          tit: "虐恋",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "1v1",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "重生",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_23479637009628504/90",
          tit: "复仇",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "娱乐圈",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "家庭",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "医术",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22139735609273504/90",
          tit: "穿书",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "年代",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "宫斗",
        },
        {
          url: "https://bookcover.yuewen.com/qdbimg/349573/c_22247838401371304/90",
          tit: "灵异",
        },
      ],
    };
  },
};
</script>
  