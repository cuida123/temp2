//加载mysql模块
const mysql=require("mysql");
//创建连接池对象
var pool= mysql.createPool({
    host:"127.0.0.1", //连接mysql数据库地址
    user:"root",      //连接mysql用户名
    password:"",      //连接mysql密码
    database:"web1806", //选择操作数据库名称
    port:3306,       //mysql端口
    connectionLimit:10 //连接池中有10个活动连接，目的：提升效率
});
//导出连接池对象
module.exports=pool;