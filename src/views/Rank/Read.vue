<template>
  <div>
    <paihang></paihang>
    <router-view></router-view>
  </div>    
</template>
<script>
  import paihang from "@/components/shopBook/paihang.vue"
export default {
 
  data() {
    return {
    };
  },
  components:{
    paihang
  }
};
</script>
