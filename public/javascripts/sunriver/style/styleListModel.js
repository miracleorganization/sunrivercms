/**
 * @author wangyouzhi
 * @date 2017/1/17
 */
define(['jquery'], function ($) {
    function createStyle(request, callback) {
        $.ajax({
            url: "/style/style-add",
            data: request,
            type: "POST",
            dataType: "json",
            async: true,
            success: function (jsonResult) {
                callback(jsonResult);
            },
            error: function () {
                var error = new Error('请求或者服务器错误');
                console.log(error);
            }
        });
    }

    function editStyle(request, callback) {
        $.ajax({
            url: "/style/style-edit",
            data: request,
            type: "POST",
            dataType: "json",
            async: true,
            success: function (jsonResult) {
                callback(jsonResult);
            },
            error: function () {
                var error = new Error('请求或者服务器错误');
                console.log(error);
            }
        });
    }

    function deleteStyle(request, callback) {
        $.ajax({
            url: "/style/style-delete",
            data: request,
            type: "POST",
            dataType: "json",
            async: true,
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
        createStyle: createStyle,
        editStyle: editStyle,
        deleteStyle: deleteStyle
    };
});
