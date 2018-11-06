<template>
    <div class="app-goods-list">
        <div class="app-goods-item" v-for="item in list" :key="item.id"  @click="getDetail(item.id)">
            <img :src="item.img_url" >
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="old">￥3{{item.p_old}}</span>
                    <span class="now">￥{{item.p_now}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span><span>{{item.sell}}</span>
                </p>
            </div>
        </div>
        <mt-button type="primary" size="large">加载更多......</mt-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        methods:{
            getDetail(id){
                //console.log(id)
                //编程式导航1
               // this.$router.push("/home/goodsinfo")
                //编程式导航2
               // this.$router.push({path:"/home/goodsinfo"})
                this.$router.push({path:"/home/goodsinfo/"+id})
                //编程式导航3
                //this.$router.push({name:"goodsinfo"})

            },
            getGoodList(){
                this.$http.get("goodslist/list").then(result=>{
                    this.list=result.body.msg;
                })
            }
        },
        created(){
            this.getGoodList();
        }
    }
</script>
<style>
 .app-goods-list{
     display:flex;
     flex-wrap:wrap;
     padding:7px;
     justify-content: space-between;
 }
 .app-goods-list .app-goods-item{
     width:49%;
     box-shadow:0 0 8px #ccc;
     margin:4px 0;
     padding:2px;
      display:flex;         /* 商品内容弹性布局 */
     flex-direction:column;/* 布局方向改为垂直 */
     justify-content: space-between;/*  */
     min-height:293px;
 }
 .app-goods-list .app-goods-item img{
     width:100%
 }
 .app-goods-list .app-goods-item .title{
     font-size:14px;
 }
 .app-goods-list .app-goods-item .info{
     background-color:#eee;
 }
 .app-goods-list .app-goods-item .info p{
     margin:0;
     padding:5px;
 }
 .app-goods-list .app-goods-item .price .now{
     color:red;
     font-weight:bold;
     font-size:16px;
 }
 .app-goods-list .app-goods-item .price .old{
     text-decoration:line-through;
     font-size:12px;
 }
 .app-goods-list .app-goods-item .info .sell{
     display:flex;
     font-size:12px;
     justify-content:space-between;
 }
</style>

