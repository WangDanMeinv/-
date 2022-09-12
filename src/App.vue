<template>
  <div id="app">
    <router-view></router-view>
    <div class="banxin" v-if="this.$route.meta.showTab">
    <ul class="bottom-bar">
      <li @click="$router.push('/bookshelf')">
      <i class="iconfont icon-icon_shujianor" ></i>
      <p >书架</p>
      </li>
      <li @click="$router.push('/bookshop')">
      <i class="iconfont icon-icon_shuchengnor"   ></i>
      <p>书城</p>
      </li>
      <li  @click="$router.push('/bookcategory')">
      <i class="iconfont icon-fenlei" ></i>
      <p>分类</p>
      </li>
      <li @click="$router.push('/person')">
      <i class="iconfont icon-wode" ></i>
      <p>我的</p>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    /* 点击底部栏时，图标变色 */
    
  }
}
</script>

<style lang="less">
.iconfont:active{
  color: orangered;
}
.banxin{
  width: 100%;
  height: 3.5rem;
  background-color: black;
  color: white;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  text-align: center;
  left: 0;
  .bottom-bar{
    width: 95%;
    margin: 0 auto;
    
    justify-content: space-between;
    display: flex;
    li{
     flex: 1;
     line-height: 1.5rem;
     margin-top: .2rem;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

</style>
