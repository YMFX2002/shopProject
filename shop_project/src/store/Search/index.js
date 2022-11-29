import { reqGetSearchInfo } from "@/api/index"

const state = {
    searchList: {}
}
const mutations = {
    SEARCH_LIST(state,searchList){
        state.searchList = searchList
        console.log(searchList);

    }
}
const actions = {
    async getSearchInfo({commit},params={}){
        let result = await reqGetSearchInfo(params);
        console.log(result);
        if(result.code == 200){
            commit('SEARCH_LIST',result.data)
        }
    }
}
const getters = {
    attrsList(state){
        //加一个空数组的目的是 防止没有网络或者网络质量差的时候返回undefined
        // return state.Search.searchList.attrsList  哒咩！直接在state仓库里获取，不经过模块化
        return state.searchList.attrsList || []
    },
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}