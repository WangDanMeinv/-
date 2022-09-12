import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "swiper/css/swiper.css"
import "reset-css"
import "@/assets/css/public.less"
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/iconfont2/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
