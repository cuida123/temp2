<template>
<div class="app_newsdetail">
    <h1 class="title">{{newinfo.title}}</h1>
    <p class="subtitle">
        <span>发表时间：{{newinfo.ctime|dateFormat}}</span>
        <span>点击：{{newinfo.click}}次</span>
    </p>
    <div class="container" v-html="newinfo.content">
    </div>
    <!--评论区域-->
    <comment-box :id="this.id"></comment-box>
</div>
</template>
<script>
    import comment from"../subcomponents/comment"
    export default{
        data(){
            return{
                id:this.$route.params.id,
                newinfo:{}
            }
        },
        methods:{
            getNewsDetail(){
                //获取新闻详细信息

                var url="newslist/find?id="+this.id;
                this.$http.get(url).then(result=>{
                    this.newinfo=result.body.msg[0];
                    console.log(this.newinfo);
                })
            },
        },
        created(){
            console.log(this.$route.params.id);
            this.getNewsDetail();
        },
        components:{
            'comment-box':comment   //注册子组件
        }
    }
</script>
<style >
    .app_newsdetail{
        padding:0 4px;
    }
    .app_newsdetail .title{
        font-size:16px;
        text-align:center;
        color:red;
        margin:15px 0;
    }
    .app_newsdetail .subtitle{
        font-size:13px;
        color:#226aff;
        display:flex;
        justify-content:space-between;
    }
    .app_newsdetail .container img{
        width:100%;
    }
</style>