<template>

    <div>
        <div class="swiper-container" ref="mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(carousel,index) in list" :key="index">
                    <img :src="carousel.imgUrl" />
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
  
</template>

<script>
import Swiper from "swiper"
export default {
    name:"Carousel",
    props:['list'],
    watch:{
        list:{
            immediate:true,
            //handler是一个固有的函数 
            handler(newValue,oldValue){
                //nextTick 在下次dom更新前 循环结束之后 执行延迟回调 。在修改数据之后 立即使用这个方法 来获取更新后的dom
                this.$nextTick(()=>{
                    //执行这个回调的时候 保证服务器的数据已经回来了 v-for中的数据已经循环回来执行完毕了（轮播图的完整结构已经有了）
                    var mySwiper = new Swiper(
                        // document.querySelector(".swiper-container")
                        this.$refs.mySwiper
                        ,
                        {
                        loop:true,
                        pagination:{
                            el:".swiper-pagination",
                            clickable:true
                        },
                        navigation:{
                            nextEl:".swiper-button-next",
                            prevEl:".swiper-button-prev"
                        }
                    })
                })
               
            }
        }
    }

}
</script>

<style>

</style>