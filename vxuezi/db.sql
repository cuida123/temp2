#db.sql 项目数据库脚本文件
#1：创建库 web1806
#注意：库名；表名；列名；英文数字全小写
#常见项目故障就是英文大小写造成
#问题：我自己开发项目一切OK，一旦上传公司服务器失败
#原因：自己电脑window 不区分大小写字母
#而公司服务器Linux 严格区分大小写
#注意：mysql数据库 bug 编码为utf8
#知识储备：公司项目针对手机端（apple）
#将utf8-->utf8mb4
drop database if exists web1806;
create database web1806 charset=utf8;
#2：进入   web1806
use web1806;
#3：创建用户名 xz_user（针对登录）
#             xz_user_info(年龄；电话；...)
#分析：几列；列名；列类型；添加3条数据
#   uid int primary key auto_increment,
#   uname varchar(25),
#   upwd varchar(32)
#建议：用户密码8位以上（有大写；小写；数字；特效字符）
create table xz_user(
    uid int primary key auto_increment,
    uname varchar(25),
    upwd varchar(32)
);
insert into xz_user values(null,'tom',md5('123'));
insert into xz_user values(null,'leo',md5('123'));
insert into xz_user values(null,'lisa',md5('123'));

#功能一：登录（对数据库查询操作）
#方式一
select * from xz_user where uname = 'tom' and upwd = md5('123');
#方式二 建议使用，效率较*高
select count(uid) as c from xz_user where uname = 'tom' and upwd = md5('123');

#图片轮播  xz_imagelist
#分析列 列类型
#图片路径大部分为绝对路径
create table xz_imagelist(
    id       int primary key auto_increment,
    img_url  varchar(255),
    title    varchar(50)
);
insert into xz_imagelist values(null,'http://127.0.0.1:3000/img/banner1.png','图片1');
insert into xz_imagelist values(null,'http://127.0.0.1:3000/img/banner2.png','图片2');
insert into xz_imagelist values(null,'http://127.0.0.1:3000/img/banner3.png','图片3');
insert into xz_imagelist values(null,'http://127.0.0.1:3000/img/banner4.png','图片4');
#图片轮播所有数据
#查询/获取数据（select）
#添加/保存/插入新数据（insert）
#修改数据/更新（update）
select id,img_url,title from xz_imagelist;

#新闻表  id title ctime click img_url price
#（1）货币数据要求不能有任何出错，特别是金融行业
#price int 单位分  100.50-->10050
#（2）为了提高数据健壮性[添加冗余列；muid;mtime]
#i1 int , i2 int , v1 varchar , v2 varchar
#防止2年后，系统升级，为xz_news 添加2列
#对系统影响比较小
#muid 修改数据用户编号 mtime 修改时间
#                     [添加删除历史记录表]
#xz_user(uid,uname,upwd)   xz_h_user(uid,uname,upwd)
#[删除用户]             --> insert into
create table xz_news(
    id int primary key auto_increment,
    title varchar(255),
    content varchar(2000),
    click int,
    img_url varchar(255),
    price decimal(10,2),
    ctime datetime
);
#添加新列在原来的表中
#alter table xz_news add v1 int;
insert into xz_news values(null,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',1,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',2,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',3,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',4,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',5,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',6,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',7,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',8,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',9,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',10,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',11,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',12,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',13,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',14,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',15,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',16,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',17,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',18,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',19,'http://127.0.0.1:3000/banner1.png',0,now());
insert into xz_news values(null,'123','123',20,'http://127.0.0.1:3000/banner1.png',0,now());

#评论表
#xz_comment id ctime content user_name isdel[1:0]
CREATE TABLE xz_comment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nid INT,
    ctime DATETIME,
    content VARCHAR(50),
    username VARCHAR(25),
    isdel INT 
);
INSERT INTO xz_comment VALUES (null,1,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,2,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,3,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,4,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,5,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,6,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,1,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,2,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,3,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,4,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,5,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,6,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,1,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,2,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,3,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,4,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,5,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,6,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,1,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,2,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,3,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,4,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,5,now(),'111','wh',0);
INSERT INTO xz_comment VALUES (null,6,now(),'111','wh',0);