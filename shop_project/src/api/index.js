import requests from "./request";

export const reqCategoryList = ()=>{
   return requests({
      url:'/product/getBaseCategoryList',
      method:'get'
   })
}
// export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList'}) 简写形式
 