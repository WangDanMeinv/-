<template>
  <div>
       <!-- 顶部 -->
       <top></top>
        <router-view></router-view>
  
  </div>
</template>
<script>
import top from "@/components/shopBook/top.vue";
export default {
  data() {
    return {
    }

  },
  components: {
    top,
  },
};
</script>