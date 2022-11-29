import axios from 'axios'

import nProgress from 'nprogress'
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL:'/mock',
    timeout: 5000
})

//请求拦截器
requests.interceptors.request.use((config)=>{
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