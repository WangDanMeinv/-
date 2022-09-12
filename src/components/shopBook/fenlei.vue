<!-- 排行数据分类 -->
<template>
     <div class="content1">
      <!-- 主题锚链接 -->
      <ul>
        <li v-for="item in newBooks" :key="item.num">
          <div class="left">
            <img :src="item.url" alt="" />
          </div>
          <div class="cont">  
             <h2>{{item.title}}</h2>
            <h3>{{item.des}}</h3>
            <h3 class="bott">{{item.fen}}</h3></div>
          <div class="right">
            <h4>{{item.num}}</h4>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'PipiFenlei',

    data() {
        return {
            
        };
    },
    props:['newBooks'],
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.content1 {
  margin-top: 50px;
  margin-left: 135px;
  li{
    margin-top: 30px;
    // height: 100px;
    position: relative;
  }
  .left{
    width: 30%;
    img{
        width: 100%;
        display: block;
    }
  }
  .cont{
    position: absolute;
    left: 33%;
    top:0;
    h2{
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 35px;
    }
    h3{
        margin-top: 15px;
        color: #888;
    }
  }
  .right{
    position: absolute;
    right: 20px;
    top: 0;
  }
}
</style>