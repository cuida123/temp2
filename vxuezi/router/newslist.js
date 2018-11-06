const express=require("express");
const pool=require("../pool");
var router=express.Router();
//功能一
router.get("/list",(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno){
        pno=1;
    }
    if(!pageSize){
        pageSize=10;
    }
    var reg=/^[0-9]{1,}$/
    if(!reg.test(pno)){
        res.send({code:-1,msg:"页码格式不正确"});
        return;
    }
    if(!reg.test(pageSize)){
        res.send({code:-2,msg:"页大小格式不正确"});
        return;
    }
    var obj={pno:pno,pageSize:pageSize};
    var progress=0;
    var sql="SELECT count(id) as c FROM xz_news";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        //console.log(result[0].c);
        var pageCount= Math.ceil(result[0].c/pageSize);
        obj.pageCount=pageCount;
        progress+=50;
        if(progress==100){
            res.send({code:1,msg:obj});
        }
    })
    var sql=" SELECT id,title,ctime,click";
        sql+=" FROM xz_news";
        sql+=" LIMIT ?,?"
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
       obj.data=result;
       progress+=50;
       if(progress==100){
           res.send({code:1,msg:obj});
       }
        
    })
});
//功能二依据id查询新闻详细信息
router.get("/find",(req,res)=>{
  //1.参数id
  var id=req.query.id;
  //1.1偷懒操作  所有参数过滤   正则表达式
  //2.sql 不要用模板字符串
  var sql="SELECT `id`, `title`, `content`, `click`, `img_url`, `price`, `ctime` FROM `xz_news` WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:result})  
  })
  //3.json
});
//功能三：分页显示评论列表
router.get("/commentlist",(req,res)=>{
    //1.参数 pno pageSize nid
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    var nid =req.query.nid;
    if(!pno){pno=1}
    if(!pageSize){pageSize=5}
    //2.sql 总数     
    var obj={pno:pno,pageSize:pageSize};
    var progress=0;
    var sql= "SELECT count(id) as c FROM xz_comment WHERE NID=?"
    pool.query(sql,[nid],(err,result)=>{
        if(err) throw err;
        obj.pageCount=Math.ceil(result[0].c/pageSize);
        progress +=50;
        //console.log(obj.pageCount)
    })

        //当前页内容
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    var sql="SELECT `id`, `nid`, `ctime`, `content`, `username`, `isdel` FROM `xz_comment` WHERE nid=? ORDER BY id DESC LIMIT ?,?";
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
        if(err)throw err;
        obj.data =result;
        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    })
    //3.json  {code:1,msg:[],pno:2,pageCount:2,pagesize:5}
})
//功能四：添加一条评论
router.post("/saveComment",(req,res)=>{
    //1.参数  nid username content
    var nid=parseInt(req.body.nid); //新闻编号
    var username=req.body.username;//用户名
    var content=req.body.content;//评论内容
    //2.content 长度大2
    if(content.length<2){
        res.send({code:-1,msg:"亲，评论内容太少了"})
        return;
    }
    //3.sql
    var sql="INSERT INTO `xz_comment`(`id`, `nid`, `ctime`, `content`, `username`, `isdel`) VALUES (null,?,now(),?,?,0)";
    //4.返回数据
    pool.query(sql,[nid,content,username],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows ==1){
            res.send({code:1,msg:"添加成功"});
        }else{
            res.send({code:-1,msg:"添加失败"});
        }
    })
});
//添加成功提示
//添加成功 清空内容

module.exports=router;