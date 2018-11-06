<template>
<div class="app_search">
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
               <input type="text" value="" placeholder="国庆好货，天天抢">
                <mt-button type="danger" size="small">搜索</mt-button>
            </div>
        </div>
    </div>
   <div class="mui-card">
        <div class="mui-card-header">搜索结果</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="../../img/shuijiao.jpg">
                            <div class="mui-media-body">
                                华为手机
                                <p class='mui-ellipsis'>华为手机，的说法钴铬合金韩国锦湖</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mui-card-footer"></div>
    </div>
</div>    
</template>
<script>
   export default{
       data(){
           return{}
       },
       methods:{

       },
       created(){

       },
   } 
</script>
<style >
    
</style>