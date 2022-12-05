<template>
    <div>
        <div class="page">
            <div class="btn1">
                <button @click="goBefore" :disabled="(pageNo==1)">«上一页</button>
                <button v-show="(startAndEnd.start > 1)" @click="$emit('goPage',1)" :class="{active:pageNo==1}">1</button>
                <button v-show="(startAndEnd.start > 2)">…</button>
                <button v-for="(page,index) in startAndEnd.end" :key="index" v-if="page >= startAndEnd.start && page<=startAndEnd.end " @click="$emit('goPage',page)" :class="{active:pageNo==page}">{{page}}</button>
               
                <button v-show="(startAndEnd.end < totalPage - 2)">…</button>
                <!-- <button v-show="(startAndEnd.end<total)">{{totalPage}}</button> -->
                <button v-show="(startAndEnd.end < totalPage - 2)" @click="$emit('goPage',totalPage)" :class="{active:pageNo==totalPage}">{{totalPage}}</button>
                <button @click="goAfter" :disabled="(pageNo==totalPage)">下一页»</button>
            </div>
            <button class="btn2" v-if="(startAndEnd.end<total)">共{{total}}页</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Pagination',
    props:['pageNo','pageSize','total','continues'],
    data(){
        return {
          
        }
    },
    computed:{
        totalPage(){
            return Math.ceil(this.total / this.pageSize)
        },
     
        //计算连续页码中展示的第一个数字和最后一个数字
        startAndEnd(){
            let start = 0,end = 0;
            const {continues,pageNo,total,pageSize,totalPage}=this
            // let totalPage = Math.ceil(total/pageSize)
           
            if(pageNo > 2 && pageNo <= totalPage -2){
                if(continues > totalPage ){
                    start = 1
                    end = totalPage 
                }else{
                    start = pageNo - Math.floor(continues/2)
                    end = pageNo + Math.floor(continues/2)
                }
            }else if(pageNo <= 2){
                start = 1
                end = continues
            }else if(pageNo > totalPage  - 2){
                // start = pageNo - Math.floor(continues/2)
                start = totalPage  -continues + 1
                end = totalPage 
            }
            return {start,end}
        }
    },
    methods:{
        goBefore(){
            this.$emit('goPage',this.pageNo - 1)
        },
        goAfter(){
            this.$emit('goPage',this.pageNo + 1)
        }
    }
}
</script>

<style lang="less" scoped>

.page{
    display: flex;
    text-align: center;
    .active{
        background-color: brown;
    }
    button{
        width: 50px;
        height: 30px;
        background-color:rgb(231, 227, 227);
        border: #ccc;
        margin: 0 4px;
    }
    .btn1{
        width: 80%;
        // float: left;
        justify-items: center;
        justify-content: space-around;
    }
    .btn2{
        justify-content: center;
    }
}

//  .page {
//           width: 733px;
//           height: 66px;
//           overflow: hidden;
//           float: right;
//           text-align: center;

//           .sui-pagination {
//             margin: 18px 0;

//             ul {
//               margin-left: 0;
//               margin-bottom: 0;
//               vertical-align: middle;
//               width: 490px;
//               float: left;

//               li {
//                 line-height: 18px;
//                 display: inline-block;

//                 a {
//                   position: relative;
//                   float: left;
//                   line-height: 18px;
//                   text-decoration: none;
//                   background-color: #fff;
//                   border: 1px solid #e0e9ee;
//                   margin-left: -1px;
//                   font-size: 14px;
//                   padding: 9px 18px;
//                   color: #333;
//                 }

//                 &.active {
//                   a {
//                     background-color: #fff;
//                     color: #e1251b;
//                     border-color: #fff;
//                     cursor: default;
//                   }
//                 }

//                 &.prev {
//                   a {
//                     background-color: #fafafa;
//                   }
//                 }

//                 &.disabled {
//                   a {
//                     color: #999;
//                     cursor: default;
//                   }
//                 }

//                 &.dotted {
//                   span {
//                     margin-left: -1px;
//                     position: relative;
//                     float: left;
//                     line-height: 18px;
//                     text-decoration: none;
//                     background-color: #fff;
//                     font-size: 14px;
//                     border: 0;
//                     padding: 9px 18px;
//                     color: #333;
//                   }
//                 }

//                 &.next {
//                   a {
//                     background-color: #fafafa;
//                   }
//                 }
//               }
//             }

//             div {
//               color: #333;
//               font-size: 14px;
//               float: right;
//               width: 241px;

//             }
//           }
//         }

</style>