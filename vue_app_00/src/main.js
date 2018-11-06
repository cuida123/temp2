import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//1.引入header组件
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
//2.注册header组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);


//3:引入VueResource
import VueResource from "vue-resource"
//4.加载VueResource
Vue.use(VueResource)
//5.定义全局（日期过滤器）
//第三方模块 moment 过滤日期
//自定义
//dateFormat过滤器名字
//datestr   用户日期
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
  return new Date(datestr).toLocaleString();
})

//6.设置全局AJAX访问基础路径
Vue.http.options.root = "http://127.0.0.1:3000/";

//7.设置全局ajax post访问格式
Vue.http.options.emulateJSON=true;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
