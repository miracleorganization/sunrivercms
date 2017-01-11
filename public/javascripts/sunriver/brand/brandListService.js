/**
 * Created by wangyouzhi on 2017/1/9.
 */
define(['jquery', 'sunriver/brand/brandListModel'], function ($, model) {
    /**
     * 检查数据是否为空
     * @param option
     * @param request
     * @param callback
     */
    function checkRequest(option, request, callback) {
        if (request.brandName == undefined) {
            confirm("品牌名字不可以为空");
            return false;
        }
        if (request.brandSign == undefined) {
            confirm("品牌标识符不可以为空");
            return false;
        }
        if (option == "create") {
            _createBrand(request, callback);
        }
        if (option == "edit") {
            _editBrand(request, callback);
        }
    }

    /**
     * 新建品牌
     * @param request
     * @param callback
     * @private
     */
    function _createBrand(request, callback) {
        model.createBrand(request, function (jsonResult) {
            if (jsonResult.code == 200) {
                var result = jsonResult.data;
                callback(result);
            }
        });
    }

    /**
     * 更新品牌
     * @param request
     * @param callback
     * @private
     */
    function _editBrand(request, callback) {
        model.updateBrand(request, function (jsonResult) {
            if (jsonResult.code == 200) {
                var result = jsonResult.data;
                callback(result);
            }
        });
    }

    /**
     * 删除品牌
     * @param request
     * @param callback
     */
    function deleteBrand(request, callback) {
        model.deleteBrand(request, function (jsonResult) {
            if (jsonResult.code == 200) {
                var result = jsonResult.data;
                callback(result);
            }
        });
    }

    return {
        checkRequest: checkRequest,
        deleteBrand: deleteBrand
    }
});
