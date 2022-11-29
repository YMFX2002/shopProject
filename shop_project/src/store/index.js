import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

import Home from './Home'
import Search from './Search'
export default new Vuex.Store({
    modules:{
        Home,
        Search
    }

    
})

