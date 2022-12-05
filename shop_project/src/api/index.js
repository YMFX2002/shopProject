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

//获取产品详情信息的接口
export const reqGoodsInfo = (skuId) => {
   return requests({
      url:`/item/${skuId}`,
      method:'get',
   })
} 
// export const reqGoodsInfo = (skuId) => requests.get(`/item/${skuId}`)