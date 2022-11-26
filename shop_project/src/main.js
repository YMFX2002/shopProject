import Vue from 'vue'
import App from './App.vue'
import router from './router'
//全局引用三级联动
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

//引入仓库
import store from './store'
Vue.config.devtools = true


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
