import { reqCategoryList } from "@/api"
//home仓库
const state = {
    categoryList:[],
    
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,16)
        // console.log(categoryList);
        // console.log('2222222222222222222222');
    }
}
const actions = {
    async categoryList({commit}){
       let result = await reqCategoryList()
    //    console.log(result);
    //    console.log('111111111111111111111');
       if(result.code ==200){
        commit("CATEGORYLIST",result.data)
       }
    }
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}