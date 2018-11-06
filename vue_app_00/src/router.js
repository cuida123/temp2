import Vue from 'vue'
import Router from 'vue-router'

//1.引入自定义组件
import  HomeContainer from "./components/tabbar/HomeContainer"
import NewsContainer from "./components/News/NewsContainer"
import member from "./components/tabbar/member"
import search from "./components/tabbar/search"
import shop from "./components/tabbar/shop"
import lianxi from "./components/lianxi/lianxi"
import NewsDetailContainer from "./components/News/NewsDetailContainer"
import GoodList from "./components/goods/GoodList"
import GoodsInfo from "./components/goods/GoodsInfo"

Vue.use(Router)

//2.指定该组件的访问路径
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:HomeContainer},
    {path:'/home/newslist',component:NewsContainer},
    {path:'/home/goodslist',component:GoodList},
    {path:'/home/lianxi',component:lianxi},
    {path:'/home/goodsinfo/:id',component:GoodsInfo,name:"goodsinfo"},
    {path:'/member',component:member},
    {path:'/search',component:search},
    {path:'/shop',component:shop},
    {path:'/newsdetail/:id',component:NewsDetailContainer},    
  ],linkActiveClass:"mui-active"
})
