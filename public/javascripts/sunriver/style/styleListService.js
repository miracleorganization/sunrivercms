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
            _editStyle(request, callback);
        }
    }

    /**
     * 新建
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

    /**
     * 编辑
     * @param request
     * @param callback
     * @private
     */
    function _editStyle(request, callback) {
        model.editStyle(request, function (jsonResult) {
            if (jsonResult.code == 200) {
                callback(jsonResult.data);
            }
        })
    }

    function deleteStyle(request, callback) {
        model.deleteStyle(request, function (jsonResult) {
            if (jsonResult.code == 200) {
                callback(jsonResult.data);
            }
        })
    }

    return {
        checkRequest: checkRequest,
        deleteStyle: deleteStyle
    };
});
