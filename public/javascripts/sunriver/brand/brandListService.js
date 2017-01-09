/**
 * Created by wangyouzhi on 2017/1/9.
 */
define(['jquery', 'sunriver/brand/brandListModel'], function ($, model) {
    /**
     * 检查数据是否为空
     * @param request
     * @param callback
     */
    function checkRequest(request, callback) {
        if (request.brandName == undefined) {
            confirm("品牌名字不可以为空");
            return false;
        }
        if (request.brandSign == undefined) {
            confirm("品牌标识符不可以为空");
            return false;
        }

        model.createBrand(request, function (jsonResult) {
            if (jsonResult.code == 200) {
                var result = jsonResult.data;
                callback(result);
            }
        });
    }

    return {
        checkRequest: checkRequest
    }
});
