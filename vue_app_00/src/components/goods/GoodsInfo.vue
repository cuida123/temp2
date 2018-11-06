<template>
    <div class="app_goodsinfo">
        <!-- 1.商品轮播区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 图片轮播 -->
                    <swipe-box  :list="imagelist"></swipe-box>
                </div>
            </div>
        </div>
        <!-- 2.商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{info.p_old}}</del>
                        销售价：<span class="now_price">
                            ￥{{info.p_now}}
                        </span>
                    </p>
                    
                        购买数量：
                        <div class="mui-numbox">
                            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
                            <input class="mui-input-numbox" type="number" v-model="num"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button"  @click="goAdd">+</button>
                        </div>                           
                    </p> 
                </div>
            </div>
            <div class="mui-card-footer">
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small">加入购物车</mt-button>
                </p>
            </div>
        </div>
        <!-- 3.商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{info.p_sn}}</p>
                    <p>商品类型：{{info.p_type}}</p>
                    <p>商品类型：{{info.p_type}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                按钮 图文介绍  商品评论
            </div>
        </div>
    </div>
</template>
<script>
    //导入图片轮播组件
    import swiper from "../subcomponents/swiper.vue"
    //引入mui js组件  
        //由于组件与严格模式冲突
    //import mui from "../../lib/mui/js/mui.js"
    export default{
        data(){
            return{
                imagelist:[],
                info:{},  //保存当前商品详细信息
                num:1
            }
        },
        methods:{
            goSub(){
                if(this.num==1){return;}
                this.num=parseInt(this.num-1)
            },
             goAdd(){
                if(this.num>=99){return;}
                this.num=parseInt(this.num+1)
            },
            //获取当前商品数据
            infoDetail(){
                this.$http.get("goodslist/find").then(result=>{
                    //获取当前商品数据   保存之info
                    this.info=result.body;
                })
            },
            //获取轮播数据
            getImageList(){
                this.$http.get("imagelist/list").then(result=>{
                    if(result.body.code==1){
                        this.imagelist=result.body.msg;
                    }
                })
            },
        },
        created(){
            //console.log(this.$route.params.id)
            this.getImageList();
            this.infoDetail();
        },
        components:{ //注册子组件
            "swipe-box":swiper
        }
    }
</script>
<style>
.mui-card-content .price .now_price{
     color:red;
     font-weight:bold;
     font-size:16px;
 }
</style>

