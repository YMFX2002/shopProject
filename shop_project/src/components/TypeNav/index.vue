<template>
  <div>
    <div class="type-nav">
      <div class="container" @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <nav class="nav" @mouseenter='notShow'>
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">京东超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
        <div class="sort" v-show="show" >
            <transition name="sort">
                <div class="all-sort-list2" @click="goSearch" >
                <!-- 一级分类 -->
                    <div
                    class="item"
                    v-for="(c1, index) in categoryList"
                    :key="c1.categoryId"
                    :class="{ cur: currentIndex === index }"
                    >
                    <h3 @mouseenter="changeIndex(index)">
                        <a
                        :data-categoryName="c1.categoryName"
                        :data-category1Id="c1.categoryId"
                        >{{ c1.categoryName }}</a
                        >
                    </h3>
                    <!-- 二级分类 -->
                    <!-- <div class="item-list clearfix" :class="{display:currentIndex==index}"> JS判断是否展示二三级分类-->
                    <div class="item-list clearfix">
                        <div
                        class="subitem"
                        v-for="c2 in c1.categoryChild"
                        :key="c2.categoryId"
                        >
                        <dl class="fore">
                            <dt>
                            <a
                                :data-categoryName="c2.categoryName"
                                :data-category2Id="c2.categoryId"
                                >{{ c2.categoryName }}</a
                            >
                            </dt>
                            <!-- 三级分类 -->
                            <dd>
                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                <a
                                :data-categoryName="c3.categoryName"
                                :data-category3Id="c3.categoryId"
                                >{{ c3.categoryName }}</a
                                >
                            </em>
                            </dd>
                        </dl>
                        </div>
                    </div>
                    </div>
                </div>
            </transition>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//按需引入节流函数
import throttle from "lodash/throttle";
export default {
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  //name不要丢掉辣！！！在全局组件注册中使用到！！！
  name: "TypeNav",
  //在mounted生命周期函数中进行发送请求操作
  //组件挂载
  mounted() {
  },
  computed: {
    ...mapState({
      // categoryList:(state=>{
      //     console.log(state);
      //     return state.Home.categoryList
      // })
      categoryList: (state) => state.Home.categoryList,
    }),
  },
  methods: {
    // 一级分类背景颜色的动态显示
    //鼠标进入修改响应式数据currentIndex属性
    //使用lodash封装的节流函数
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),

    enterShow() {
        this.show = true;
    },
    //一级分类鼠标移出的事件回调
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.show = false;
        
      }
    },
    notShow(){
        if(this.$route.path != "/home") {
            this.show = false;
        }
    },
    //三级联动路由的跳转
    goSearch(event) {
      // let element = event.target  获取元素节点
      //节点中的dataset属性可以获取节点的自定义属性和属性值
      //解构赋值
      let { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      let location = { name: "search" };
      let query = { categoryName: categoryname };
      // 标签身上有categoryname必为a标签
      if (categoryname) {
        // 根据id号分辨一级二级三级分类
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        //整理参数
        location.query = query;
        //路由跳转
        this.$router.push(location);
      }


      //路由跳转的参数对象 有query和params参数两种 传其中任意一种都应该把另一种也捎带上
      if(this.$route.query){
        let location = { name: "search" ,params:{keWord:this.keyWord || undefined}};
         //整理参数
         location.query = this.$route.query;
        //路由跳转
        this.$router.push(location);
      }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        // .item:hover{
        //     background-color:#bac4ca;
        // }
        .cur {
          background-color: skyblue;
        }
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }

    // 过渡动画的样式
    // 开始进入状态
    .sort-enter{
        height: 0px;
    }

    // 结束状态
    .sort-enter-to{
        height: 461px;

    }
    // 定义动画的进入时间速率
    .sort-enter-active{
        transition:all .5s linear
    }
  }
}
</style>