<template>
 <div class="app-container" id="t">
<!--1顶部导航-->
    <header id="header" class="mui-bar mui-bar-transparent" >
        <h1 class="mui-title">vue App</h1>
    </header>
<!--2路由显示其他模块-->

    <router-view></router-view>
<!--3taddar-->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item " to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shop">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
            <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
            <span class="mui-tab-label">个人中心</span>
        </router-link>
    </nav>
 </div>
</template>

<style>
    #header{
    background-color: rgba(22, 140, 237, 0.1);
    }
   .app-container{
     padding-top:44px;
     padding-bottom:50px;
     overflow-x:hidden;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
