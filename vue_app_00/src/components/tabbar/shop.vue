<template>
<div class="app_shop">
    <div class="mui-card">
        <div class="mui-card-header">购物车</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner" v-for="item in list" :key="item.id">
                {{item.name}} {{item.price}}&nbsp;&nbsp;&nbsp;
                <div class="mui-numbox">
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="setSub(item.id)">-</button>
                    <input class="mui-input-numbox" type="number" :value="item.count" />
                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="setAdd(item.id)" >+</button>
                </div>
            </div>
        </div>
        <div class="mui-card-footer">小计：<span>￥{{getsubtotal}}</span></div>
    </div>
</div>    
</template>
<script>
   export default{
       data(){
           return{
               list:[],
           }
       },
       methods:{
        
           //按钮加
           setAdd(id){
               //console.log("购物车+"+id)
               //当前购物车的id  依据id将count自增
               for(var item of this.list){
                   if(item.id ==id){
                    if(item.count>=99) break;
                    item.count++;
                   }
               }
           },
           //按钮减
           setSub(id){
               for(var item of this.list){
                   if(item.id == id){
                       if(item.count<=1) break;
                       item.count--;
                   }
               }
           },
           //获取购物车数据
           getCartlist(){
               this.$http.get("cartlist/list").then(result=>{
                   this.list=result.body.msg;
               })
           },
       },
       created(){
           this.getCartlist()
       },
       computed:{
           //计算属性 计算多个数据
           getsubtotal:function(){
               var sum=0;
               for(var item of this.list){
                   sum+=item.price*item.count;
               }
               return sum;
           }
       }
   } 
</script>
<style >
   
</style>