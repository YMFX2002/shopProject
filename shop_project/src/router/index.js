//引入组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import store from '@/store'
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
let router = new VueRouter({
    routes:[
        {
            path:'/detail',
            name:'Detail',
            component:Detail,
            meta:{show:true}
        },
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
    ],
    //滚动行为
    scrollBehavior(to,from,savedPosition){
        //y=0 设置滚动条在最上方
        return {y:0}
    }
   
})


//全局前置守卫（路由跳转之前进行判断）
// router.beforeEach(async (to,from,next)=>{
//     //to：获取到要跳转的路由信息        去哪
//     //from：获取到路由信息是从哪里来的   从哪来
//     //next：放行函数                   放行到指定路由  next('/path')
//     next()
//     // console.log(store.state.User.token);
//     //用户登录才会有token
//     let token = store.state.User.token
//     if(token){
//         //用户登录之后不能再去到login页面 去home页
//         if(to.path == '/login' || to.path == '/register'){
//             next('/home')
//         }else{
//             //登录了但去到的不是login
//             //如果用户名存在
//             if(store.state.User.userInfo.name){
//                 next()
//             }else{
//                 //如果没有用户名信息 派发action让仓库存储用户信息再跳转
//                 try {
//                     //获取用户信息成功
//                     await store.dispatch('getUserInfo')
//                     next()
//                 } catch (error) {
//                     //token失效 获取不到用户的信息
//                     //清除token
//                     await store.dispatch('userLogout')
//                     next('/login')
//                 }    
//             }
//         }
//     }else{
//         //未登录
//         // next()
//     }
// })

export default router