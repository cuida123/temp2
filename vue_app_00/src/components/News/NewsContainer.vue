<template>
<div class="app_newslist">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
            <router-link :to="'/newsdetail/'+item.id">
                <img class="mui-media-object mui-pull-left" src="../../img/shuijiao.jpg">
                <div class="mui-media-body">
                    <h1>{{item.title}}</h1>
                    <p class='mui-ellipsis'>
                        <span>{{item.ctime|dateFormat}}</span>
                        <span>点击：{{item.click}}次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
    <mt-button type="primary" size="large" @click ="getMore()">加载更多</mt-button>
</div>
</template>
<script>

    export default{
        data(){
            return{
                list:[],
                pageIndex:0   //页码
            }
        },
        methods:{
            getMore(){
                this.pageIndex++; //页码加 1
                var url= "newslist/list?pno="+this.pageIndex;
                this.$http.get(url).then(result=>{
                    //赋值有问题，覆盖上一页数据
                    //this.list=result.body.msg.data;
                    //保存前一页
                    this.list=this.list.concat(result.body.msg.data);
                });
            },
            getNewsList(){
                // //分页获取新闻列表
                // var url="http://127.0.0.1:3000/newslist/list";
                // this.$http.get(url).then(result=>{
                //     console.log(result)
                //     if(result.body.code == 1){
                //         this.list=result.body.msg.data;
                //     }else{
                        
                //     }
                // })
            }
        },
        created() {
            this.getNewsList();
            this. getMore();
        },
    }
</script>
<style >
    .app_newslist .mui-table-view h1{
        font-size:14px;
    }
    .app_newslist li .mui-ellipsis{
        font-size:12px;
        color:#226aff;
        display:flex;
        justify-content:space-between;
    }
</style>