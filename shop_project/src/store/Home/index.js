import { reqCategoryList, reqGetBannerList,reqGetFloorList } from "@/api"
//home仓库
const state = {
    //三级列表数据
    categoryList:[],
    //Banner轮播图数据
    getBannerList:[],
    //中间楼层组件数据
    floorList:[]
    
}
const mutations = {
    CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList.slice(0,16)
        // console.log(categoryList);
        // console.log('2222222222222222222222');
    },
    BANNER_LIST(state,getBannerList){
        state.getBannerList = getBannerList
        // console.log(getBannerList);
    },
    GET_FLOOR_LIST(state,floorList){
        state.floorList = floorList
        // console.log(floorList);
    }
}
const actions = {
    async categoryList({commit}){
       let result = await reqCategoryList()
    //    console.log(result);
    //    console.log('111111111111111111111');
       if(result.code == 200){
        commit("CATEGORY_LIST",result.data)
       }
    },

    async getBannerList({commit}){
        let result = await reqGetBannerList()
        // console.log(result);
        if(result.code == 200){
            commit("BANNER_LIST",result.data)
        }
    },

    async getFloorList({commit}){
        let result = await reqGetFloorList()
        // console.log(result);
        if(result.code == 200){
            commit("GET_FLOOR_LIST",result.data)
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