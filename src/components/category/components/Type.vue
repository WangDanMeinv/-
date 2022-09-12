<template>
  <div>
   
    <ul class="bookType clear">
      <li v-for="item, index in bookType" :key="index"
       :class="{ typeColor: index == current }"
               @click="go(index)"
      >
        {{ item }}
      </li>
    </ul>
    <ul class="bookType clear" >
      <li v-for="item, index1 in bookzishu" :key="index1"
       :class="{ typeColor: index1 == current1 }"
               @click="go1(index1)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current:0,
      current1:0,
      bookType: ["全部", "连载", "完结"],
      bookzishu: ["全部", "50万字以下", "50-200万字", "200万字以上"],
      
    };
  },
  methods:{
    go(index){
      this.current=index
    },
     go1(index1){
      this.current1=index1
    }
  }
};
</script>
<style lang="less" scoped>
        .typeColor{
        color: red;
        }
   
        //  height: 5rem;
        //   background: rgb(248, 248, 248);
        
         .bookType{
        //  height: 2.5rem;
          background: rgb(248, 248, 248);
        //  background: thistle;
        li{
            float: left;
            padding: .6rem 1rem;
           
        }
    }
</style>