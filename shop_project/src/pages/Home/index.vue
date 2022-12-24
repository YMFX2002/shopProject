<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="index" :FList="floor">{{floor}}</Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'
export default {
  name:'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor
  },
  //派发action
    mounted(){
        this.$store.dispatch('getFloorList')
        this.$store.dispatch('getUserInfo')

    },
    //仓库
    computed:{
        ...mapState({
            floorList:(state)=>state.Home.floorList
        })
    }
 

}
</script>

<style>

</style>