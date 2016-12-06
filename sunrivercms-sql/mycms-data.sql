use mycms;

/*user 表数据*/
insert user(username, password, level) values('admin', '00000000', '-1');

/*color 数据*/
insert color(color_name, color_sign, color_code) values('黑色', '1', '#000000');
insert color(color_name, color_sign, color_code) values('白色', '2', '#FFFFFF');

/*brand 数据*/
insert brand(brand_name, brand_sign) values('路易威登','LV');
insert brand(brand_name, brand_sign) values('爱马仕', 'HERMES');