//购物车
//1.引入模块 pool express
const express=require("express");
const pool=require("../pool.js");
//2.创建路由对象
var router=express.Router();
//功能一：购物车列表
router.get("/list",(req,res)=>{
    var obj={code:1,msg:[
        {id:1,name:"小辣椒",price:2100,count:1},
        {id:2,name:"华为",price:2100,count:2},
        {id:3,name:"苹果",price:2100,count:1}
]};
      
   
    res.send(obj);
});

//4.导出当前路由模块
module.exports=router;