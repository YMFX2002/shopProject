//引入mockjs模块
import Mock from "mockjs";
import banners from '@/mock/banners.json'
import floor from '@/mock/floor.json'
import detail from '@/mock/detail.json'

//mock数据  第一个参数为请求地址 第二个参数为请求的数据
Mock.mock("/mock/banners",{code:200,data:banners})  //模拟首页轮播图数据
Mock.mock("/mock/floor",{code:200,data:floor}) //模拟楼层组件的数据
Mock.mock("/mock/detail",{code:200,data:detail}) //模拟商品详情页数据