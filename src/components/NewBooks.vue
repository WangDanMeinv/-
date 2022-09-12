<template>
  <div>
    <div class="topBarBox">
    <div class="topBar">
      <span class="newBookBack" onclick="window.history.go(-1)">＜</span>
      潜力新书
      </div>
      </div>
      <div class="wlcBox">
      <p class="wlc">皮皮小说精选新书推荐</p>
      <p class="wlc">欢迎投稿QQ：2222222222222</p>
      </div>
      <ul class="NewBooksList">
        <li v-for="item,index in newBooksList " :key='index'>
          <img  :src="item.url" alt="">
          <div class="contentRight ">
          <p class="booksTit  ">{{item.tit}}</p>
         <div class="contentBox"> <p class="booksContent">{{item.des}}</p></div>
          </div>
          </li>
                  
      </ul>
  </div>
</template>
<script>
import buttomTop from "../components/buttomTap.vue";

export default {
  data(){
    return{
      newBooksList:[
        {tit:"至尊九龙",des:"六年前，我加入了特种兵部啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",url:"https://bookcover.yuewen.com/qdbimg/349573/c_22424827601479404/90",},
        {tit:"白月光拿了反派剧本",des:"前世，堂堂定国公府嫡女，惨遭姨娘陷害，成了定国公府人人闭口不谈，连最下等奴仆都不如的存在。此生，穆清瑜浴血归来，势必要夺回本该属于自己的一切。",url:"https://bookcover.yuewen.com/qdbimg/349573/c_23249523009849604/90",},
        {tit:"至尊九龙",des:"世人皆知沈家嫡女沈清漪，生的钟灵毓秀，仙姿佚貌，可惜眼神不太好。放着温润若玉的摄政王不爱，偏偏去爱那个金玉其外败絮其中的梁王赵宪。",url:"https://bookcover.yuewen.com/qdbimg/349573/c_22139735609273504/90",},
        {tit:"团宠年代：锦鲤崽崽三岁半",des:"魔王揣在怀里捂了三千年的小魔蛋，破壳之际却突然消失！一睁眼，粑粑不见了，而崽崽居然来到了八零年代的清水村，香香的躺在麻麻的怀里？",url:"https://bookcover.yuewen.com/qdbimg/349573/c_22168665801775004/180",},
      ]
    }
  },
  components: {
    buttomTop
  },
};
</script>
<style lang="less" scoped>
/* ul li */
.contentRight{
  width:60% ;
  height: 80%;

  margin: 1rem 0 0 1rem;
  // background: lemonchiffon;
  float: left;
}
.NewBooksList{
 
  li{
    margin:0  auto;
    margin-bottom:1.3rem ;
    width: 90%;
    height: 12rem;
    border: .05rem solid rgb(199, 199, 199);
    box-shadow: .2rem .2rem  .5rem rgb(231, 231, 231);
    img{
      width: 25%;
      height: 65%;
      float: left;
      margin: 1rem 0 0 2rem;
    }
    .booksTit{
      // float: left;
      // margin:0rem 0 0 1rem;
      width:100%;
      font-size: 1.4rem ;
      font-weight: 520;
    }
    .contentBox{
      // width: 100%;
      height: 70%;
      // border: .01rem solid gray;
      margin-top: 1rem;
      overflow: hidden;
    .booksContent{
     
      line-height: 1.7rem;
      font-size:1.2rem ;
      color: rgb(150, 150, 150);
      padding-bottom:1rem ;
      white-space: pre-wrap;
      text-overflow: hidden;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }}
  }
}
.topBarBox{
  width: 100%;
  border-bottom:.05rem solid rgb(199, 199, 199) ;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
.topBar{
  width: 95%;
  height: 3rem;
  line-height: 3rem;
  // background: lightblue;
  margin: 0 auto;
text-align: center;
font-size: 1.4rem;
  font-weight: 520;
.newBookBack{
  font-size: 2rem;
float: left;
}

}
}
.wlcBox{
  padding-top:3rem ;
}
.wlc{
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.1rem;
  color: gray;
  
}
</style>