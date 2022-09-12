<template>
  <div>
    <!-- 轮播图功能 -->
    <!-- <div class="swiper banxin">
                <img src="@/assets/images/swiper1.png" alt="">
            </div> -->
    <swiper :swipers="swiper"></swiper>
    <!-- 列表功能 -->
    <rank :list="list"></rank>
    <!-- 主编推荐 -->
    <recommend :arr="arr1"></recommend>
    <!-- 小说水平排列列表 -->
    <level :stand="stand"></level>
    <recommend :arr="arr2"></recommend>
    <!-- 阅读榜 -->
    <read :reads="read"></read>
    <recommend :arr="arr3"></recommend>
  </div>
</template>
    <script>
import recommend from "@/components/shopBook/recommend.vue";
import rank from "@/components/shopBook/rank.vue";
import level from "@/components/shopBook/level.vue";
import read from "@/components/shopBook/read.vue";
import swiper from "@/components/shopBook/swiper.vue";
export default {
  data() {
    // swiper轮播图
    return {
      swiper: [
        { url: require("@/assets/images/read0.png") },
        { url: require("@/assets/images/read0.png") },
        { url: require("@/assets/images/read0.png") },
      ],
      // 排行数据
      list: [
      { url: require("@/assets/images/g1.jpg"), conten: "排行",to:"/read" },
        { url: require("@/assets/images/g2.jpg"), conten: "人气",to:"/read"  },
        { url: require("@/assets/images/g3.jpg"), conten: "完结",to:"/read"  },
        { url: require("@/assets/images/g4.jpg"), conten: "新书",to:"/newbooks"  },
      ],
      // 水平排列数据
      stand: [
        {
          url: require("@/assets/images/j2.jpg"),
          title: "丹武帝尊",
          name: "日出山间",
        },
        {
          url: require("@/assets/images/j3.jpg"),
          title: "最强兵王混都市",
          name: "云语者",
        },
        {
          url: require("@/assets/images/j4.jpg"),
          title: "重生八零之枭商",
          name: "月山枫",
        },
        {
          url: require("@/assets/images/j5.jpg"),
          title: "万界快递员",
          name: "iron",
        },
      ],
      // 小说第一个数据
      arr1: [
        {
          comt: "主编力荐",
          url: require("@/assets/images/j1.jpg"),
          title: "美女总裁的贴身女王",
          conten:
            "男主是一个战功显赫的超级特种兵。因为被老爹逼婚，于是偷偷逃走，没想到这一逃就逃出了-段段桃花运，竟然还被美女逼着签了卖身契，给她洗衣做饭，治她头痛肚子痛，还要负责暖床?",
          author: "雷死不偿命/都市生活",
        },
      ],
      arr2: [
        {
          comt: "完本精选",
          url: require("@/assets/images/j6.jpg"),
          title: "系统:我有一个智能电脑",
          conten: "他依靠着智能电脑系统,在强者的道路上,能够走多远",
          author: "都市生活·完结",
        },
        {
          url: require("@/assets/images/j7.jpg"),
          title: "校园狂少",
          conten:
            "他行事肆无忌惮，横行霸道到了极点!各种极品美女纷至沓来，清纯邻家小妹、美艳冰山总裁、风情老板娘和火辣女老师，他-一个都不打算放过!",
          author: "都市生活·完结",
        },
        {
          url: require("@/assets/images/j8.jpg"),
          title: "绝品药神",
          conten:
            "每天卖着壮阳药的少年，突然得到了神的眷顾，成为强者。药之力，神之命!",
          author: "都市生活·完结",
        },
      ],
      arr3: [
        {
          comt: "猜你喜欢",
          url: require("@/assets/images/like1.png"),
          title: "最强医圣",
          conten:
            "来自未来的数据流瑶瑶，带来强大异能，让学医的张不凡拥有了无限能量，治病救人换取功德值，从而提升自身能力，小小属丝张不凡开始了逆袭之路。",
          author: "都市生活·完结",
        },
        {
          url: require("@/assets/images/like2.png"),
          title: "都市最强战神",
          conten:
            "强者归来入俗世，搅动八方风云。-代战神，功勋无数，却抛弃显赫身家，只为报恩。魑魅魍魉，, 无耻宵小，速速退散! ",
          author: "都市生活·完结",
        },
        {
          url: require("@/assets/images/like3.png"),
          title: "至尊武神",
          conten:
            "小青年意外魂穿异界，最终却称霸一-方!凭借正统中华内功，他灭尽诸多仇敌，完虐各大势力!他与整个天下为敌，但整个天下却无人能阻挡他!",
          author: "奇幻玄幻·完结",
        },
        {
          url: require("@/assets/images/like4.png"),
          title: "网游:开局就逆袭",
          conten:
            "幸福的童年突遭巨变，谁能明白我的心情?只有在游戏中，我方能- -展身手，重新找回幸福的感觉。何以解忧?唯有游戏!",
          author: "游戏体育·完结",
        },
        {
          url: require("@/assets/images/like5.png"),
          title: "神仙美容师",
          conten:
            "普通大学生徐凡意外得到了一款神奇的美图秀秀，P物P人P神样样精通从此做起了神仙界的专职美容师。组乐队!开直播!玩选美!@和各路神仙称兄道弟嗨翻天!没有经商的天赋，不要慌!我有财神!没有学文的天赋，不要慌!我有文曲星!没有打架的天赋，不要慌!我有斗战胜佛! @他突然觉得这个世界如此美好--腹黑萝莉,火辣御姐，清纯校花，还有天庭大美人，全部围着他团团转，逍遥自在快活人间!",
          author: "奇幻玄幻·完结",
          author: "都市生活",
        },
        {
          url: require("@/assets/images/like6.png"),
          title: "都市最强仙医",
          conten:
            "林峰本是仙古大陆天丹宗首徒，宗门破亡意外穿越到地球，不想中医没落，人人喊打，他毅然站出拯救中医，积万德之功后他苦苦寻找通往仙古大陆的方法。既然老天又给了一-次机会，何惧!只待大道有日可成，定然踏上九重天，杀你们个干干净净!",
          author: "都市生活",
        },
      ],
      read: [
        { url: require("@/assets/images/read0.png"), title: "网游之无敌杀手" },
        { url: require("@/assets/images/read1.png"), title: "世界之树" },
        { url: require("@/assets/images/read2.png"), title: "万界杂货铺" },
      ],
    };
  },
  components: {
    rank,
    level,
    recommend,
    read,
    swiper,
  },
};
</script>