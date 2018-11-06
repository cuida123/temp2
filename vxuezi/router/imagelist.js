//图片轮播
//1.引入模块 pool express
const express=require("express");
const pool=require("../pool.js");
//2.创建路由对象
var router=express.Router();
//功能一：用户希望获取图片轮播列表
//3.处理请示 /list 返回所有图片轮播数据
//GET POST DELETE PUT HEAD OPTION TRACE CONNECT
//  -用户提交参数  无参数
//  -sql   SELECT id,img_url,title FROM xz_imagelist;  
//  -json  text/xml/json
//json的特点：1占用空间少  2易于处理
router.get("/list",(req,res)=>{
    var sql="SELECT id,img_url,title FROM xz_imagelist";
    pool.query(sql,(err,result)=>{
    if(err) throw err;
    //1 执行正确  -1 -2 -3 操作失败 告诉程序
    res.send({code:1,msg:result});
    })
})
//4.导出当前路由模块
module.exports=router;