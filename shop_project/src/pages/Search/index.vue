<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
           
            <!-- 分类的面包屑 -->
            <li class="with-x" v-if="searchParams.categoryName">{{searchParams.categoryName}}<i @click="removeCategoryName"> × </i></li>
            <!-- 关键字的面包屑 -->
            <li class="with-x" v-if="searchParams.keyword">{{searchParams.keyword}}<i @click="removeKeyword"> × </i></li>
            <!-- {{this.$route.query.categoryName}} -->
            <!-- 品牌的面包屑 -->
            <li class="with-x" v-if="searchParams.trademark">{{searchParams.trademark}}<i @click="removeTrademark"> × </i></li>
            <!-- 属性的面包屑 -->
            <li class="with-x" v-for="(prop,index) in searchParams.props" :key="index">{{prop.split(":")[1]}}<i @click="removeAttr"> × </i></li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @trademarkInfo = "trademarkInfo" @attrInfo="attrInfo"/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active: isOne}" @click="changeOrder('1')">
                  <a >
                    综合
                    <span v-show="isOne">{{isAsc ? '⬆': '⬇'}}</span>
                    <!-- <span :class="searchParams.order.indexOf('desc')">⬇</span> -->
                  </a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li :class="{active: isTwo}" @click="changeOrder('2')">
                  <a>
                    价格
                    <span v-show="isTwo">{{isAsc ? '⬆': '⬇'}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
               <li class="yui3-u-1-5">
                <div class="list-wrap" v-for="good in goodsList" :key="good.id">
                  <div class="p-img" >
                    <!-- @click="$router.push(`/detail/${good.id}`)" -->
                    <router-link :to='`/detail/${good.id}`'>
                      <img :src="good.defaultImg" >
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ &nbsp;</em>
                      <i>{{good.price}}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" :title="good.title">{{good.title}}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li> 
            </ul>
          </div>
          <!-- 分页器 -->
          <Pagination :pageNo="searchParams.pageNo" :pageSize="searchParams.pageSize" :total="total" :continues="5" @goPage="goPage"></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchSelector from './SearchSelector/SearchSelector'
  import { mapGetters ,mapState} from 'vuex'

  export default {
    name: 'Search',
    data(){
      return {
        searchParams:{
          // 一级分类id
          category1Id:'',
          // 一级分类id
          category2Id:'',
          // 一级分类id
          category3Id:'',
          // 分类名称
          categoryName:'',
          // 搜索输入关键字
          keyword:'',
          // 排序
          order:'1:desc',
          // 分页器 展示当前是第几页
          pageNo:2,
          // 每一页展示数据的个数
          pageSize:5,
          // 平台收买属性操作带的参数
          props:[],
          // 品牌
          trademark:'',
        },
        
      }
    },
    components:{
      SearchSelector
    },
    beforeMount(){
      Object.assign(this.searchParams,this.$route.query,this.$route.params)
      console.log(this.searchParams);
    },
    mounted(){
      //直接在这里写getData不合理 mounted只执行一次 再次搜索输入的时候就不会再执行了 所以放在methods中 只要数据有变化就再次执行
      this.getData()
    },
    computed:{
      ...mapGetters(['goodsList']),
      ...mapState({
        total:(state)=>state.Search.searchList.total
      }),
      isOne(){
        return this.searchParams.order.indexOf('1') != -1
      },
      isTwo(){
        return this.searchParams.order.indexOf('2') != -1
        
      },
      isAsc(){
        return this.searchParams.order.indexOf('asc') != -1
      },
      isDesc(){
        return this.searchParams.order.indexOf('desc') != -1
      },

      
   
    },
    methods:{
      //把需要发请求的这个action封装在一个函数里 将来再需要发请求的时候只调用这个函数即可
      getData(){
        this.$store.dispatch('getSearchInfo',this.searchParams)
      },
      //删除分类的名字
      removeCategoryName(){
        this.searchParams.categoryName = ''
        this.searchParams.category1Id = ''
        this.searchParams.category2Id = ''
        this.searchParams.category3Id = ''
        this.getData()
      },
      // 删除关键字
      removeKeyword(){
        this.searchParams.keyword = undefined
        //再次发送请求
        this.getData()
        //通知兄弟组件Header清除关键字
        this.$bus.$emit('clear')
        //进行路由的跳转
        if(this.$route.query){
          this.$router.push({name:'search',query:this.$route.query})
        }
      },
      // 品牌自定义事件的回调
      trademarkInfo(trademark){
        this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`

        this.getData()
      },
      // 删除品牌信息
      removeTrademark(){
        // 置空
        this.searchParams.trademark = undefined
        // 再次发送请求
        this.getData()
      },
      //属性事件自定义回调
      attrInfo(attr,attrValue){
        // console.log(attr,attrValue);
        let props = `${attr.attrId}:${attrValue}:${attr.attrName}`
        //数组去重
        if(this.searchParams.props.indexOf(props) == -1){
          this.searchParams.props.push(props)
        }
       
        this.getData()
      },
      //删除属性的面包屑
      removeAttr(index){
        this.searchParams.props.splice(index,1)
        this.getData()
      },
      //排序
      changeOrder(flag){
        //获取order的初始值
        let originFlag = this.searchParams.order.split(':')[0]
        let originSort = this.searchParams.order.split(':')[1]
        let newOrder = ''
        //点击的事件是综合
        if(flag == originFlag){
          newOrder = `${originFlag}:${originSort == 'desc' ? 'asc' : 'desc'}`
          this.searchParams.order=newOrder
          // console.log(newOrder);
        //点击的事件是价格
        }else{
          newOrder = `${flag}:${originSort == 'desc' ? 'asc' : 'desc'}`
          this.searchParams.order=newOrder
        }
        //再次发送请求
        this.getData()
      },
      goPage(pageNo){
        this.searchParams.pageNo = pageNo 
        
      }
      
     
     
    },
    //监听组件实例身上的属性的属性值的变化
    watch:{
      //监听路由的信息是否发生变化 如果发生变化 就再次发送请求
      $router(newValue,oldValue){
        // 在每一次重新发送请求的时候都要将上一次的数据置空，来接受下一次的数据
        this.searchParams.category1Id=''
        this.searchParams.category2Id=''
        this.searchParams.category3Id=''
        //置空之后再次发送之前整理好的参数发送给服务器
        Object.assign(this.searchParams,this.$route.query,this.$route.params)
        //再次发送ajax请求
        this.getData()
        //地址栏需要修改 进行路由跳转
        //本意删除query 如果路径当中出现了params参数要进行保留
        if(this.$route.params){
          this.$router.push({name:'search',params:this.$route.params})
        }
      }
      
    }
  }
</script>

<style lang="less" scoped>
  .main {
    margin: 10px 0;

    .py-container {
      width: 1200px;
      margin: 0 auto;

      .bread {
        margin-bottom: 5px;
        overflow: hidden;

        .sui-breadcrumb {
          padding: 3px 15px;
          margin: 0;
          font-weight: 400;
          border-radius: 3px;
          float: left;

          li {
            display: inline-block;
            line-height: 18px;

            a {
              color: #666;
              text-decoration: none;

              &:hover {
                color: #4cb9fc;
              }
            }
          }
        }

        .sui-tag {
          margin-top: -5px;
          list-style: none;
          font-size: 0;
          line-height: 0;
          padding: 5px 0 0;
          margin-bottom: 18px;
          float: left;

          .with-x {
            font-size: 12px;
            margin: 0 5px 5px 0;
            display: inline-block;
            overflow: hidden;
            color: #000;
            background: #f7f7f7;
            padding: 0 7px;
            height: 20px;
            line-height: 20px;
            border: 1px solid #dedede;
            white-space: nowrap;
            transition: color 400ms;
            cursor: pointer;

            i {
              margin-left: 10px;
              cursor: pointer;
              font: 400 14px tahoma;
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }

            &:hover {
              color: #28a3ef;
            }
          }
        }
      }

      .details {
        margin-bottom: 5px;

        .sui-navbar {
          overflow: visible;
          margin-bottom: 0;

          .filter {
            min-height: 40px;
            padding-right: 20px;
            background: #fbfbfb;
            border: 1px solid #e2e2e2;
            padding-left: 0;
            border-radius: 0;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

            .sui-nav {
              position: relative;
              left: 0;
              display: block;
              float: left;
              margin: 0 10px 0 0;

              li {
                float: left;
                line-height: 18px;

                a {
                  display: block;
                  cursor: pointer;
                  padding: 11px 15px;
                  color: #777;
                  text-decoration: none;
                }

                &.active {
                  a {
                    background: #e1251b;
                    color: #fff;
                  }
                }
              }
            }
          }
        }

        .goods-list {
          margin: 20px 0;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              height: 100%;
              width: 20%;
              margin-top: 10px;
              line-height: 28px;

              .list-wrap {
                .p-img {
                  padding-left: 15px;
                  width: 215px;
                  height: 255px;

                  a {
                    color: #666;

                    img {
                      max-width: 100%;
                      height: auto;
                      vertical-align: middle;
                    }
                  }
                }

                .price {
                  padding-left: 15px;
                  font-size: 18px;
                  color: #c81623;

                  strong {
                    font-weight: 700;

                    i {
                      margin-left: -5px;
                    }
                  }
                }

                .attr {
                  padding-left: 15px;
                  width: 85%;
                  overflow: hidden;
                  margin-bottom: 8px;
                  min-height: 38px;
                  cursor: pointer;
                  line-height: 1.8;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;

                  a {
                    color: #333;
                    text-decoration: none;
                  }
                }

                .commit {
                  padding-left: 15px;
                  height: 22px;
                  font-size: 13px;
                  color: #a7a7a7;

                  span {
                    font-weight: 700;
                    color: #646fb0;
                  }
                }

                .operate {
                  padding: 12px 15px;

                  .sui-btn {
                    display: inline-block;
                    padding: 2px 14px;
                    box-sizing: border-box;
                    margin-bottom: 0;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    border-radius: 0;
                    background-color: transparent;
                    margin-right: 15px;
                  }

                  .btn-bordered {
                    min-width: 85px;
                    background-color: transparent;
                    border: 1px solid #8c8c8c;
                    color: #8c8c8c;

                    &:hover {
                      border: 1px solid #666;
                      color: #fff !important;
                      background-color: #666;
                      text-decoration: none;
                    }
                  }

                  .btn-danger {
                    border: 1px solid #e1251b;
                    color: #e1251b;

                    &:hover {
                      border: 1px solid #e1251b;
                      background-color: #e1251b;
                      color: white !important;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }

       
      }
    }
  }
</style>