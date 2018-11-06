//app.js
//1.加载模块 express
const express = require("express");
//1.2加载body-parser模块
const bodyParse=require("body-parser")

//1.1加载图片轮播(路由模块 一个文件<包含一组功能>）
const routerImageList = require("./router/imagelist")
const routerNewList = require("./router/newslist")
const routerGoodsList=require("./router/goodslist")
const routerCarList=require("./router/carlist")
//2.创建express
var app=express();
//2.0配置到body-parser模块
app.use(bodyParse.urlencoded({extended:false}));
//2.1加载处理跨越模块
const cors=require("cors")
//2.2允许哪个地址跨域
app.use(cors({
    origin:["http://127.0.0.1:3001"],
    credentials:true
}));

//3.绑定监听端口 3000
app.listen(3000);
//4.指定静态目录
//__dirname 当前程序所有目录完整路径
app.use(express.static(__dirname+"/public"));
//5.将图片轮播模块加载当前应用中指定访问路径
//http:127.0.0.1:3000/imagelist/list
app.use("/imagelist",routerImageList);
app.use("/newslist",routerNewList);
app.use("/goodslist",routerGoodsList);
app.use("/cartlist",routerCarList);