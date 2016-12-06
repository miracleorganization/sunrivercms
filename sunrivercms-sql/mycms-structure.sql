create database if not exists mycms default character set utf8;

/*user 表
  id
  username 账号
  password 密码
  level -1为超级管理员
*/
create table if not exists user(id int unsigned primary key auto_increment, username varchar(20) unique not null, password varchar(20) not null, level int not null);

/*color 表
  id
  color_name 颜色名字
  color_sign 颜色标示号码
  color_code 颜色16进制代码
*/
create table if not exists color(id int unsigned primary key auto_increment, color_name varchar(20) unique not null, color_sign varchar(20) unique not null, color_code varchar(20) unique);

/*material 表
  id
  material_type 材质类型
  material_sing 材质标示号码
  material_photo 材质图片地址
*/
create table if not exists material(id int unsigned primary key auto_increment, material_type varchar(20) unique not null, material_sign varchar(20) unique not null, material_photo varchar(100) unique);

/*style 表
  id
  style_name 款式名字
  style_sign 款式标示号码
*/
create table if not exists style(id int unsigned primary key auto_increment, style_name varchar(20) unique not null, style_sign varchar(20) unique not null);

/*wallet 表
  id
  wallet_name 钱包名字
  wallet_color 钱包颜色
  wallet_material 钱包材质
  wallet_style 钱包款式
  wallet_price 钱包价格
  wallet_photo 钱包图片地址
  wallet_date 钱包款式时间
  lastmodify 最后修改时间
*/
create table if not exists wallet(id int unsigned primary key auto_increment, wallet_name varchar(20) unique not null, wallet_color varchar(20) not null, wallet_material varchar(20) not null, wallet_style varchar(20) not null, wallet_price int unsigned not null, wallet_photo varchar(100) not null,wallet_date timestamp default current_timestamp, lastmodify timestamp default current_timestamp);

/*wallet 表
  增加一列 wallet_brand
  wallet_brand 钱包品牌
*/

alter table wallet add column wallet_brand varchar(20) not null after id;

/*brand 表
  id
  brand_name 品牌名字
  brand_sign 品牌标示号码
*/
create table if not exists brand(id int unsigned primary key auto_increment, brand_name varchar(20) unique not null, brand_sign varchar(20) unique not null);

