

--后台登陆页    王腾飞
DROP TABLE IF EXISTS boss;
CREATE TABLE boss(
  id INT PRIMARY KEY AUTO_INCREMENT,
  account VARCHAR (255),
  password VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO boss (account,password) VALUES
('wtf110','123456')

-- 登录数据库   王腾飞
DROP TABLE IF EXISTS user;
CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  account VARCHAR (255),
  password VARCHAR (255)
  ctime timestamp NULL DEFAULT CURRENT_TIMESTAMP
)DEFAULT CHARSET = utf8;
INSERT INTO user (account,password) VALUES
('a123456','dc483e80a7a0bd9ef71d8cf973673924');




--主页商品分类
DROP TABLE IF EXISTS d_homelist;
CREATE TABLE d_homelist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO d_homelist (pic) VALUES
('/creatframe/frame/public/img/d_9.png'),
('/creatframe/frame/public/img/d_10.png'),
('/creatframe/frame/public/img/d_11.png'),
('/creatframe/frame/public/img/d_12.png'),
('/creatframe/frame/public/img/d_13.png'),
('/creatframe/frame/public/img/d_14.png');


-- 商品列表
DROP TABLE IF EXISTS goods;
CREATE TABLE goods(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  homeid INT(12) ,
  name VARCHAR (255),
  pic VARCHAR(255),
  designer VARCHAR(255),
  designerpic VARCHAR(255),
  price VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO goods (designer,designerpic,pic,price,name,homeid) VALUES
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_03.png','1213.80','简约松软靠椅',1),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shop9_07.png','4396.70','摩登北欧客厅沙发',2),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_07.png','2137.20','新中式储物柜',3),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_11.png','1753.00','简约松软靠椅',1),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_03.png','1213.80','简约松软靠椅',1),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shop9_07.png','4396.70','摩登北欧客厅沙发',2),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_07.png','2137.20','新中式储物柜',3),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_11.png','1753.00','简约松软靠椅',1),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_03.png','1213.80','简约松软靠椅',1),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shop9_07.png','4396.70','摩登北欧客厅沙发',2),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_07.png','2137.20','新中式储物柜',3),
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','/creatframe/frame/public/img/lj_img/lj_shoplist9_11.png','1753.00','简约松软靠椅',1);


-- 商品列表视图
DROP VIEW IF EXISTS goodslist_view;
CREATE VIEW goodslist_view AS
SELECT g.* , h.name as songs_name ,shejishi.pic as songs_pic
FROM goods AS g , d_homelist AS h
WHERE g.uid = h.id;


-- 商品详情
DROP TABLE IF EXISTS goodsdetail;
CREATE TABLE goodsdetail(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  pic VARCHAR(255),
  price VARCHAR (255),
  gid VARCHAR (255),
  content VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO goodsdetail (gid,pic,price,name,content) VALUES
( '1', '/frame/public/img/lj_img/lj_shoplist9_03.png','1213.80','简约松软靠椅','ASDU'),
( '2', '/frame/public/img/lj_img/lj_shop9_07.png','4396.70','摩登北欧客厅沙发','ASDU'),
( '3', '/frame/public/img/lj_img/lj_shoplist9_07.png','2137.20','新中式储物柜','ASDU'),
( '4', '/frame/public/img/lj_img/lj_shoplist9_11.png','1753.00','简约松软靠椅','ASDU');

DROP TABLE IF EXISTS goods;
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `designer` varchar(255) DEFAULT NULL,
  `designerpic` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `homeid` int(11) NOT NULL,
  `label` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

INSERT INTO `goods` (`id`, `name`, `pic`, `designer`, `designerpic`, `price`, `homeid`, `label`) VALUES
(1, '简约松软靠椅', '/creatframe/frame/public/img/lj_img/lj_shoplist9_03.png', '胡艳 Silvia', '/creatframe/frame/public/img/lj_img/lj_shoping7_10.png', '1213.80', 0, 1),
(2, '摩登北欧客厅沙发', '/creatframe/frame/public/img/lj_img/lj_shop9_07.png', '胡艳 Silvia', '/creatframe/frame/public/img/lj_img/lj_shoping7_10.png', '4396.70', 0, 2),
(3, '新中式储物柜', '/creatframe/frame/public/img/lj_img/lj_shoplist9_07.png', '胡艳 Silvia', '/creatframe/frame/public/img/lj_img/lj_shoping7_10.png', '2137.20', 0, 3),
(4, '简约松软靠椅', '/creatframe/frame/public/img/lj_img/lj_shoplist9_11.png', '胡艳 Silvia', '/creatframe/frame/public/img/lj_img/lj_shoping7_10.png', '1753.00', 0, 4),
(5, '摩登北欧客厅沙发', '/creatframe/frame/public/img/lj_img/lj_shop9_07.png', '胡艳 Silvia', '/creatframe/frame/public/img/lj_img/lj_shoping7_10.png', '4396.70', 0, 5),
(6, '简约松软靠椅', '/creatframe/frame/public/img/lj_img/lj_shoplist9_11.png', '胡艳 Silvia', '/creatframe/frame/public/img/lj_img/lj_shoping7_10.png', '1753.00', 0, 3),
(7, '欧美', '/creatframe/frame/public/img/lj_img/lj_shoplist9_11.png', '胡艳 Silvia', '/creatframe/frame/public/img/lj_img/lj_shoping7_10.png', '1753.00', 0, 1);

-- 个人信息表
DROP TABLE IF EXISTS d_person;
CREATE TABLE IF NOT EXISTS `d_person` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `weixin` varchar(255) DEFAULT NULL,
  `qq` int(11) NOT NULL,
  `dizhi` varchar(255) NOT NULL,
  `pic` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

INSERT INTO `d_person` ( `name`, `phone`, `email`, `weixin`, `qq`, `dizhi`, `pic`) VALUES
('杜帅','110','757293200@qq.com','du321521','757293200','太原学院','/creatframe/frame/public/img/d_3.png');


-- 設計師列表
DROP TABLE IF EXISTS zjt_design;
CREATE TABLE zjt_design(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  pic VARCHAR(255),
  content VARCHAR(255)
)DEFAULT CHARSET = utf8;
INSERT INTO zjt_design (name, pic, content) VALUES
( '胡艳Silvia','/creatframe/frame/public/img/lj_img/lj_shoping7_10.png','
                            设计师Silvia，nacasa创始人兼
                            设计师,拥有超过十年欧美高端家具品牌产品开
                            发及设计经验.源于对民间手工艺的热爱,她的
                            设计理念是将民间手工艺与当代时尚设计相结合，
                            将手工艺继续传承下去
                        '),
( '江云Alice','/creatframe/frame/public/img/zjt_img/zjtdetails13.png','丰富的想象、创新能力和前瞻性是必不可少的，这是设计师与工程师的一大区别。工程设计采用计算法或类比法，工作的性质主要是改进、完善而非创新；造型设计则非常讲究原创和独创性'),
( '戴斯Darcie','/creatframe/frame/public/img/zjt_img/zjtdetails2.png','新设计师要不断磨练自己，经得起考验。在这个磨练的过程中我们更多的是要找准自己的定位和长处，必须要对自己苛刻要求，才能更好地提高自己'),
( '张紫萱ailsa','/creatframe/frame/public/img/d_1.jpg',' 夕阳从窗外透进来。他的影子长长地映在地板上。脸上的镜片也被阳光晕染得熠熠生辉。就这么温暖,这么宁静。时间似乎凝固了,他审视着自己的作品');
