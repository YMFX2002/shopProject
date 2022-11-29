//引入组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//使用
Vue.use(VueRouter)


// 解决重复点击事件报错的问题
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            name:'Home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/search/:keyWord?',
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
        {
            path:'/',
            redirect:'/home'
        }
    ]
   
})