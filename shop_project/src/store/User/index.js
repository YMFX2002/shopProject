import { reqCode,  reqUserInfo, reqUserLogin, reqUserRegister, reqGetLogout } from "@/api"
import { setToken, getToken, removeToken } from "@/utils/token";

const state = {
    // code:""
    token:getToken(),
    userInfo:{}
}
const mutations = {
    // GET_CODE(state,code){
    //     state.code = code
    // }
    USER_LOGIN(state,token){
        state.token = token
    },
    GET_USER_INFO(state,userInfo){
        state.userInfo = userInfo
    },
    // 清除本地的数据
    CLEAR_USER_INFO(state){
        //把仓库中相关的用户信息清空
        state.token = ''
        state.userInfo = {}
        // 本地存储的数据清空
        removeToken()
    }
}
const actions = {
    //获取验证码
    // async getCode(phone){
    //     let result = await reqCode(phone)
    //     console.log(result);
    //     if(result.code == 200){
    //         commit('GET_CODE',result.data)
    //         return 'ok'
    //     }else{
    //         return Promise.reject(new Error('failed'))
    //     }
    // }

    //注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        console.log(result);
        console.log('00000000000000000000000000');
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //登录（token）
    async userLogin({commit},data){
        let result = await reqUserLogin(data)
        console.log(result);
        if(result.code== 200){
            // 用户登录成功且获取到token
           commit('USER_LOGIN',result.data.token)
            //持久化存储token
            localStorage.setItem('TOKEN',result.data.token)
           return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        console.log(result);
        if(result.code== 200){
            //提交用户信息
            commit('GET_USER_INFO',result.data)
            return 'ok'
        }
    },

    //退出登录
    async userLogout({commit}){
        //向服务器发送一次请求 通知服务器清除token
        let result = await reqGetLogout()
        // action中不能操作state 需要提交mutation修改state
        if(result.code== 200){
            commit('CLEAR_USER_INFO')
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}