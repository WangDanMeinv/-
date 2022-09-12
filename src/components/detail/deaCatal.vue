<template>
     <!-- 目录 第一章详情-->
    <div>
        <div class="catalBox">
      <span class="catal">目录</span>
      <div class="right">
        <span>第617章 在一起</span>
        <span class="red">·已完结</span>
        <i class="iconfont icon-xiayibu"></i>
      </div>
    </div>
    <div class="conten">
      <img src="@/assets/images/conten.png" alt="" />
    </div>
    </div>
</template>

<script>
export default {
    name: 'PipiDeaCatal',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.catalBox {
  border-bottom: 8px solid #eee;
  position: relative;
}
.catalBox .catal {
  font-size: 20px;
  font-weight: 700;
  height: 40px;
  display: block;
  line-height: 40px;
  padding-left: 12px;
}
.catalBox .right {
  position: absolute;
  right: 12px;
  top: 12px;
  color: #8a8a8a;
}
.catalBox .right .red {
  color: rgb(248, 56, 100);
}
.conten {
  width: 100%;
  border-bottom: 8px solid #eee;
}
.conten img {
  width: 100%;
}
</style>