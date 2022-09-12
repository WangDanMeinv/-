<template>
  <!-- 详情简介 -->
  <div class="briefBox">
    <div class="ki">
      <span class="brief">简介</span>
    </div>
    <div class="jian">
      <span class="webkit">
        男主是一个战功显赫的超级特种兵。因为被老爹逼婚，于是偷偷逃走，没想到这一逃就逃出了-段段桃花运，竟然还被美女逼着签了卖身契，给她洗衣做饭，治她头痛肚子痛，还要负责暖床?
      </span>
    </div>
    <div class="label">
      <span>都市修真</span>
      <span>无敌</span>
      <span>战神</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PipiDeaBrief",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped>
    .briefBox {
  color: #000;
  border-bottom: 8px solid #eee;
}
.briefBox .ki {
  border-bottom: 1px solid #ccc;
  margin-bottom: 12px;
}
.briefBox .brief {
  font-size: 20px;
  font-weight: 700;
  height: 40px;
  display: block;
  line-height: 40px;
  padding: 0 12px;
}
.briefBox .webkit {
  -webkit-line-clamp: 3;
  padding: 0 12px;
  line-height: 24px;
  font-size: 20px;
}
.briefBox .label {
  margin: 20px 12px;
  height: 26px;
  line-height: 28px;
}
.briefBox .label span {
  display: block;
  float: left;

  background: #eee;
  margin-right: 10px;
  padding: 0 10px;
  color: #aaa;
}
</style>