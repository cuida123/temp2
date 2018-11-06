//图片轮播
//1.引入模块 pool express
const express=require("express");
const pool=require("../pool.js");
//2.创建路由对象
var router=express.Router();
//功能一：发送商品列表给前端
router.get("/list",(req,res)=>{
    var obj=[
      {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png",title:"魅族6",p_old:"30000.00",p_now:"21455.00",sell:1},
      {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png",title:"360好的6",p_old:"35500.00",p_now:"4555.00",sell:1},
      {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png",title:"反倒",p_old:"80470.00",p_now:"4555.00",sell:1},
      {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png",title:"电饭锅",p_old:"54000.00",p_now:"4555.00",sell:1},
      {id:5,img_url:"http://127.0.0.1:3000/img/banner1.png",title:"fd族6",p_old:"30000.00",p_now:"21455.00",sell:1},
      {id:6,img_url:"http://127.0.0.1:3000/img/banner2.png",title:"收入的提6",p_old:"35500.00",p_now:"4555.00",sell:1},
      {id:7,img_url:"http://127.0.0.1:3000/img/banner3.png",title:"反反倒是倒",p_old:"80470.00",p_now:"4555.00",sell:1},
      {id:8,img_url:"http://127.0.0.1:3000/img/banner4.png",title:"电交互锅",p_old:"54000.00",p_now:"4555.00",sell:1},
    ];
    res.send({code:1,msg:obj});
});
//功能2
router.get("/find",(req,res)=>{
  var obj={ib:"9",title:"小辣椒 10",p_old:2199.00,p_now:2009,p_sn:"145642323",p_type:"青春款"}
    res.send(obj);
});
//4.导出当前路由模块
module.exports=router;