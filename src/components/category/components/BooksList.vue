<template>
  <div>
    <!-- 男 书列表 -->
    <div class="boy" v-if="$store.state.isShowBooks">
      <ul class="bookContent">
        <li v-for="(item, index) in booksList" :key="index">
          <img class="clear" :src="item.url" alt="" />
          <div class="imgContent">
            <span class="bookName">{{ item.tit }}</span
            ><span class="bookPingfen">{{ item.pf }}分</span>
            <p class="bookDes webkit">{{ item.des }}</p>
            <p class="author">{{ item.author }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 女 书列表 -->
    <div class="girl" v-if="!$store.state.isShowBooks">
      <ul class="bookContent">
        <li v-for="(item, index) in booksList1" :key="index">
          <img class="clear" :src="item.url" alt="" />
          <div class="imgContent">
            <span class="bookName">{{ item.tit }}</span
            ><span class="bookPingfen">{{ item.pf }}分</span>
            <p class="bookDes webkit">{{ item.des }}</p>
            <p class="author">{{ item.author }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["booksList", "booksList1"],
};
</script>

<style lang="less" scoped>
.bookContent {
  width: 100%;
  background: rgb(248, 248, 248);
  li {
    height: 7rem;
    padding: 0 1rem;
    // background: lightcoral;
    padding-top:1.1rem ;
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
      font-family:simsun;

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
</style>