//引入组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//使用
Vue.use(VueRouter)

//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/search',
            name:'search',
            component:Search,
            meta:{show:true}
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            name:'register',
            component:Register,
            meta:{show:false}
        },
    ]
   
})