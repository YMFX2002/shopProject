import { reqGoodsInfo } from "@/api"

const state = {
    goodsInfo:{}
}
const mutations = {
    GET_GOODS_INFO(state,goodsInfo){
        state.goodsInfo = goodsInfo
    }
}
const actions = {
    async getGoodsInfo({commit},skuId){
        const result = await reqGoodsInfo(skuId)
        console.log(result);
        console.log("111111111111111111111111111111");
        if(result.code == 200 ){
            commit('GET_GOODS_INFO',result.data)
        }
    }
}
const getters = {
    categoryView(state){
        return state.goodsInfo.categoryView || []
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}