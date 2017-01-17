/**
 * @author wangyouzhi
 * @date 2017/1/17
 */
define(['jquery', 'sunriver/style/styleListModel'], function ($, model) {

    /**
     * 检查新建、编辑的数据不为空
     * @param option
     * @param request
     * @param callback
     * @returns {boolean}
     */
    function checkRequest(option, request, callback) {
        console.log(option);
        console.log(request);
        if (request.styleName == undefined || request.styleName == "") {
            confirm("缺少样式名字参数");
            return false;
        }
        if (request.styleSign == undefined || request.styleSign == "") {
            confirm("缺少样式标识参数");
            return false;
        }
        if (option == "create") {
            _createStyle(request, callback);
        }
        if (option == "edit") {
            if (request.id == undefined || request.id == "") {
                confirm("缺少样式 id 参数");
                return false;
            }
        }
    }

    /**
     *
     * @param request
     * @param callback
     * @private
     */
    function _createStyle(request, callback) {
        model.createStyle(request, function (jsonResult) {
            if (jsonResult.code == 200) {
                callback(jsonResult.data);
            }
        })
    }

    return {
        checkRequest: checkRequest
    };
});
