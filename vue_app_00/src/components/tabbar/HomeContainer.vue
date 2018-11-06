<template>
<div class="app">  
    <!--主页组件homecontainer.vue-->
    <!--1:轮播图-->
    <mt-swipe :auto="1000">
        <mt-swipe-item v-for="item in list" :key="item.id">
            <img :src="item.img_url">
        </mt-swipe-item>
    </mt-swipe>
    <!--2：六宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                <img src="../../img/menu1.png">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodslist">
                <img src="../../img/menu3.png">
                <div class="mui-media-body">商品</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/lianxi">
                <img src="../../img/menu6.png">
                <div class="mui-media-body">联系</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../img/menu4.png">
                <div class="mui-media-body">支付</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../img/menu5.png">
                <div class="mui-media-body">订单 </div>
            </a>
        </li>
         <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../img/menu2.png">
                <div class="mui-media-body">点餐</div>
            </a>
        </li>
    </ul>
     <!--2：六宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                <img src="../../img/menu1.png">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodslist">
                <img src="../../img/menu3.png">
                <div class="mui-media-body">商品</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../img/menu2.png">
                <div class="mui-media-body">点餐</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../img/menu4.png">
                <div class="mui-media-body">支付</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../img/menu5.png">
                <div class="mui-media-body">订单 </div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../img/menu6.png">
                <div class="mui-media-body">联系</div>
            </a>
        </li>
    </ul>
</div>
</template>
<script>
    import {Toast} from "mint-ui";
    export default{
        data(){
            return {
                list:[]
            }
        },
        methods:{
            getImageList(){
                //获取图片轮播数据
                var url="http://127.0.0.1:3000/imagelist/list";
                this.$http.get(url).then(result=>{
                    if(result.body.code == 1){
                        this.list=result.body.msg;
                    }else{
                       Toast("加载轮播图片失败........."); 
                    }
                })
            }
        },
        created(){
            this.getImageList();
        }
    }
</script>
<style>
    /*轮播图高度*/ 
    .app .mint-swipe{
        height:200px;
    }
    .app .mint-swipe img{
        width:100%;
        height:200px;
    }
 /*六宫格背景白色 去边框字体图片大小*/ 
    .app .mui-grid-view.mui-grid-9{
        background-color:#fff;
    }
    .app .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
    }
    .app .mui-grid-view.mui-grid-9 img{
        width:60px;
        height:60px;
    }
    .app .mui-grid-view.mui-grid-9 .mui-table-view-cell .mui-media-body{
        font-size:10px;
    }
</style>