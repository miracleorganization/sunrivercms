/**
 * Created by wangyouzhi on 2017/1/2.
 */
var BrandDao = require('../../brand/BrandDao');

var BrandBoRequest = new Object();
BrandBoRequest.brand_name = "TestName";
BrandBoRequest.brand_sign = 'TestSign';

/**
 * 查询所有的数据
 */
// BrandDao.queryAll(BrandBoRequest, function (jsonResult) {
//     console.log("code: " + jsonResult.code);
//     console.log("message: " + jsonResult.message);
//
//     for (var item in jsonResult.data) {
//         console.log(jsonResult.data[item].id);
//         console.log(jsonResult.data[item].brand_name);
//         console.log(jsonResult.data[item].brand_sign);
//     }
// });

/**
 * 插入一条品牌数据
 */
// BrandDao.insert(BrandBoRequest, function (jsonResult) {
//     console.log("code: " + jsonResult.code);
//     console.log("message: " + jsonResult.message);
//
//     for (var item in jsonResult.data) {
//         console.log(jsonResult.data[item]);
//         console.log(jsonResult.data[item]);
//         console.log(jsonResult.data[item]);
//     }
// });

/**
 * 删除一条数据
 */
// var BrandBoRequest1 = new Object();
// BrandBoRequest1.id = 35;
// BrandDao.deleteById(BrandBoRequest1, function (jsonResult) {
//     console.log(jsonResult);
//     console.log("code: " + jsonResult.code);
//     console.log("message: " + jsonResult.message);
// });