import Vue from 'vue'
import App from './App.vue'
import router from './router'

//全局引用三级联动
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

//引入仓库
import store from './store'
Vue.config.devtools = true

//引入mock模拟数据
import '@/mock/mockServer' 

//引入swiper轮播图样式
import 'swiper/css/swiper.css'

//全局引用轮播图组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)

// import { reqGetSearchInfo }  from '@/api'
// console.log(reqGetSearchInfo({}));

import Pagination from '@/components/Pagination'
Vue.component(Pagination.name, Pagination)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
