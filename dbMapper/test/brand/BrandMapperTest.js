/**
 * Created by wangyouzhi on 2016/12/30.
 */
var BrandMapper = require("./../../brand/BrandMapper");

var Brand = {brand_name: '112', brand_sign: '112'};

BrandMapper.Brand.create(Brand, function (err, instance) {
    if (err) throw err;

    console.log("id: " + instance.id);
    console.log("brand_name: " + instance.brand_name);
    console.log("brand_sign: " + instance.brand_sign);
});