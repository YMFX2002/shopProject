import store from '@/store'
import axios from 'axios'

import nProgress from 'nprogress'
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL:'/api',
    timeout: 5000
})

//请求拦截器
requests.interceptors.request.use((config)=>{

    if(store.state){

        //请求头添加一个字段（userTempId） 和后台协商好的
        config.headers.userTempId = store.state
    }

    //携带token给服务器
    if(store.state.User.token){
        config.headers.token = store.state.User.token || ''
    }


    nProgress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use(
   
    //成功的回调
    (res)=>{
        nProgress.done()
        return res.data
    },
    //失败的回调
    // (error)=>{
    //     return Promise.reject(new Error('fail'))
    // }
    )

export default requests