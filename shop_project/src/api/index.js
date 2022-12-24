import requests from "./request";
import mockRequests from "./mockRequest";

//获取三级分类数据
export const reqCategoryList = ()=>{
   return requests({
      url:'/product/getBaseCategoryList',
      method:'get'
   })
}
// export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList'}) 简写形式

//获取banner轮播图的mock数据
export const reqGetBannerList = ()=>{
   return mockRequests({
      url:'/banners',
      method:'get'
   })
}

//获取floor轮播图的mock数据
export const reqGetFloorList = ()=>{
   return mockRequests({
      url:'/floor',
      method:'get'
   })
}

//获取search模块数据
export const reqGetSearchInfo = (params)=>{
   return requests({
      url:'/list',
      method:'post',
      data:params
   })
}

// 获取产品详情信息的接口
export const reqGoodsInfo = (spuId) => {
   return mockRequests({
      url:`/detail/${spuId}`,
      method:'get',
   })
} 
// export const reqGoodsInfo = (skuId) => requests.get(`/item/${skuId}`)

//获取注册验证码
// export const reqCode = (phone) => {
//    return requests({
//       url:`/user/passport/sendCode/${phone}`,
//       method:'get'
//    })
// }

//注册
export const reqUserRegister = (data) =>{
   return requests({
      url:'/user/passport/register',
      data,
      method:'post'
   })
}

//登录
export const reqUserLogin = (data) => {
   return requests({
      url:'/user/passport/login',
      data,
      method:'post'
   })
}

//获取用户信息（需要带着用户的token向服务器索取用户的信息）
export const reqUserInfo = () => {
   return requests({
      url:'/user/passport/auth/getUserInfo',
      method:"get"
   })
}

//退出登录
export const reqGetLogout = () => {
   return requests({
      url:'/user/passport/logout',
      method:'get'
   })
}