/**
 * Created by wangyouzhi on 2017/1/9.
 */
define(['jquery'], function ($) {
    /**
     * 创建品牌
     * @param request
     * @param callback
     */
    function createBrand(request, callback) {
        $.ajax({
            url: "/brandx/brand-new",
            data: request,
            type: "POST",
            dataType: "json",
            success: function (jsonResult) {
                callback(jsonResult);
            },
            error: function () {
                var error = new Error('请求或者服务器错误');
                console.log(error);
            }
        });
    }

    return {
        createBrand: createBrand
    }
});