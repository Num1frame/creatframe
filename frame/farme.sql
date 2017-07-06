

-- 商品列表
DROP TABLE IF EXISTS goods;
CREATE TABLE goods(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  pic VARCHAR(255),
  designer VARCHAR(255),
  designerpic VARCHAR(255),
  price VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO goods (designer,designerpic,pic,price,name) VALUES
( '胡艳Silvia','/frame/public/img/lj_img/lj_shoping7_10.png','/frame/public/img/lj_img/lj_shoplist9_03.png','1213.80','简约松软靠椅'),
( '胡艳Silvia','/frame/public/img/lj_img/lj_shoping7_10.png','/frame/public/img/lj_img/lj_shop9_07.png','4396.70','摩登北欧客厅沙发'),
( '胡艳Silvia','/frame/public/img/lj_img/lj_shoping7_10.png','/frame/public/img/lj_img/lj_shoplist9_07.png','2137.20','新中式储物柜'),
( '胡艳Silvia','/frame/public/img/lj_img/lj_shoping7_10.png','/frame/public/img/lj_img/lj_shoplist9_11.png','1753.00','简约松软靠椅');


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


-- 登录数据库   王腾飞
DROP TABLE IF EXISTS user;
CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  account VARCHAR (255),
  password VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO user (account,password) VALUES
('a123456','dc483e80a7a0bd9ef71d8cf973673924');
