<template>
    <div>
 <!-- 小说具体分类模块 -->
  
      <div class="novalContent">
       
  
        <!-- 是否显示隐藏男生爱读的书籍 -->
        <div v-if="$store.state.isShowBooks">
           <ul class="sideBar"  >
             <li v-for="item,index in sideNav" :key="index">
               <a :href="item.href"
              :class="{ borderRight: index == current }"
               @click="go(index)"
             >{{item.tit}}</a>
             </li>
          
        </ul>
          <div class="content1">
            <!-- 主题锚链接 -->
            <p class="title2" id="zhuti">主题</p>
  
            <ul class="clear">
              <router-link
                to="/theme"
                tag="li"
                v-for="(item, index) in zhuti"
                :key="index"
              >
                <img :src="item.url" alt="" />
                <span>{{ item.tit }}</span>
              </router-link>
            </ul>
            <!-- 情节锚链接 -->
            <p class="title" id="qingjie">情节</p>
            <ul class="clear">
              <router-link
                to="/plot"
                tag="li"
                v-for="(item, index) in qingjie"
                :key="index"
              >
                <img :src="item.url" alt="" />
                <span>{{ item.tit }}</span>
              </router-link>
            </ul>
            <!-- 角色锚链接 -->
            <div class="juese">
              <p class="title1" id="juese">角色</p>
              <ul class="clear">
                <router-link
                  to="/role"
                  tag="li"
                  v-for="(item, index) in jiaose"
                  :key="index"
                >
                  <img :src="item.url" alt="" />
                  <span>{{ item.tit }}</span>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
        <!-- 是否显示隐藏女生爱读的书籍 -->
        <div v-if="!$store.state.isShowBooks">
          <div class="novalContent">
            <ul class="sideBar">
             <li v-for="item,index in sideNav" :key="index">
               <a :href="item.href"
              :class="{ borderRight: index == current }"
               @click="go(index)"
             >{{item.tit}}</a>
             </li>
            </ul>
  
            <div class="content1">
              <!-- 主题锚链接 -->
              <p class="title1" id="zhuti">主题</p>
  
              <ul class="clear">
                <router-link tag="li" v-for="(item, index) in zhuti1" to="/theme" :key="index">
                  <img :src="item.url" alt="" />
                  <span>{{ item.tit }}</span>
                </router-link>
              </ul>
              <!-- 情节锚链接 -->
              <p class="title" id="qingjie">情节</p>
              <ul class="clear">
                <router-link tag="li" to="/plot" v-for="(item, index) in qingjie1" :key="index">
                  <img :src="item.url" alt="" />
                  <span>{{ item.tit }}</span>
                </router-link>
              </ul>
              <!-- 角色锚链接 -->
              <div class="juese">
                <p class="title" id="juese">角色</p>
  
                <ul class="clear">
                  <router-link tag="li" to="/role" v-for="(item, index) in juese1" :key="index">
                    <img :src="item.url" alt="" />
                    <span>{{ item.tit }}</span>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"CategoryContent",
    data(){
       return{
       current:0,
      }
    },
    props:["zhuti","qingjie","jiaose","zhuti1","qingjie1","juese1","sideNav"],
    methods:{
       go(index) {
       this.current = index//激活样式
 }
    }
}
</script>
<style lang="less" scoped>

 a {
  color: gray;
}
    /* 具体分类 */
    .novalContent {
      width: 100%;
      padding-top: 16px;
      .sideBar {
        width: 6rem;
        height: 100vh;
        border-right: 0.05rem solid rgb(218, 213, 213);
        margin-top: 3rem;
        text-align: center;
        position: fixed;
        top: 0;
        li {
          .borderRight{
                        border-right:.2rem solid red ;
                        color: red;
          }
         
         a{
           
            // background: rgb(140, 155, 212);
            display: inline-block;
            // border-right:.2rem solid red ;
            width: 97%;
            margin-top:2rem ;
            font-size:1.3rem ;
          }
        }
      }
      /* 右边的小说分类内容 */
      .content1 {
        text-align: left;
        padding: 0 0rem 0 7rem;
        .title1{
          margin-top: 26px;
        }
        .title2{
          margin-top: 40px;
        }
        p {
          
          margin-top: 10px;
          font-size: 1.5rem;
        }
        
        ul {
          width: 100%;
          li {
            width: 45.5%;
            height: 3.5rem;
            background: rgb(243, 242, 241);
            float: left;
            margin: 0.5rem 0.5rem 0 0;
  
            img {
              height: 80%;
              margin: 0.4rem;
              vertical-align: middle;
            }
          }
        }
        a {
          font-size: 1.1rem;
        }
      }
    }
  
  .juese {
    height: 100vh;
  }
  .current {
    color: rgb(216, 106, 106);
  }
</style>