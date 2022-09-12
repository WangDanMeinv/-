<template>
  <div>
    <div class="fenleiBox clear" v-if="$store.state.isShowBooks" >
      <ul class="topFenlei">
        <li v-for="(item, index) in zhutiInfo"   :key="index" 
         :class="{ fenleiColor: index == current }"
               @click="go(index)">
          {{ item }}
        </li>
        <!-- 点击分类栏小单元 下面就会出现相应的书籍  给每个分类小单元设置一个对应固定的搜索方法 -->
      </ul>
    </div>
     <div class="fenleiBox clear" v-if="!$store.state.isShowBooks">
      <ul class="topFenlei">
        <li v-for="(item, index) in zhutiInfo1"   :key="index"
         :class="{ fenleiColor: index == current }"
               @click="go(index)"
        >
          {{ item }}
        </li>
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    props:["zhutiInfo","zhutiInfo1",],
  data() {
    return {
           current:0,
    }
  },
  methods:{
go(index) {
       this.current = index//激活样式
 }
  }
};
</script>
<style scoped lang="less">
.fenleiColor{
  color: red;
}
.fenleiBox {
  font-size: 1rem;
//   height: 3rem;
margin-top:4rem ;
  line-height: 2.5rem;
  background: rgb(246, 246, 246);
  .topFenlei {
    padding-right: 1rem;
    li {
      padding-left: 1rem;
      //   background: lightcoral;
      text-align: left;
      float: left;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      //   padding-left:1rem ;
      font-weight: 550;
    }
  }
}
</style>