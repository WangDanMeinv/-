<template>
  <div class="w">
    <login></login>
    <money></money>
    <sign></sign>
    <hobby></hobby>
    <history></history>
    <advice></advice>
    <contact></contact>
    <set></set>
  </div>
</template>

<script>
import Login from '../components/Person/Login.vue'
import Money from '../components/Person/Money.vue'
import Sign from '@/components/Person/Sign.vue'
import Hobby from '@/components/Person/Hobby.vue'
import History from '@/components/Person/History.vue'
import Advice from '@/components/Person/Advice.vue'
import Contact from '@/components/Person/Contact.vue'
import Set from '@/components/Person/Set.vue'
export default {
    components:{
        Login,
        Money,
        Sign,
        Hobby,
        History,
        Advice,
        Contact,
        Set
    }
}
</script>
<style scoped>
.w{
  margin: 0 auto;
  width: 90%;
}
</style>