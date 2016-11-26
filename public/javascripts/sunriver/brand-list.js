/**
 * Created by wangyouzhi on 2016/11/25.
 */
"use strict";
require(['jquery'], function ($) {
    $(function () {
        init();

        function init() {
            $("#create").on("click", openCreateFloat);
            $(".brand-list-float-cancel, .brand-list-item-option-1").on("click", closeFloat);
            $("#create-edit-float .brand-list-item-option-2").on("click", {option: "new"}, submit);
        }

        /**
         * 新建功能 浮层
         */
        function openCreateFloat() {
            $("#create-edit-float").show();
        }

        /**
         * 关闭浮层
         */
        function closeFloat() {
            $(".brand-list-float").hide();
        }

        /**
         * 提交
         */
        function submit(e) {
            var params = searchData();
            if (params) {
                if (e.data.option == 'new') {
                    var URL = "/manage/brand-list-new-action";
                    ajaxNew(URL, params);
                }
                if (e.data.option == 'edit') {
                    alert("待续...");
                }
            } else {
                alert("请再检查");
            }
        }

        /**
         * 查询输入的数据
         * @returns {{}}
         */
        function searchData() {
            var params = {};
            var brandName = $("#brandName").val();
            var brandSign = $("#brandSign").val();
            if (1 <= brandName.length && brandName.length <= 20 && 1 <= brandSign.length && brandSign.length <= 20) {
                params.brandName = brandName;
                params.brandSign = brandSign;
                return params;
            } else {
                return false;
            }
        }

        /**
         * ajax数据发送
         */
        function ajaxNew(URL, params) {
            var result = undefined;
            $.ajax({
                url: URL,
                data: params,
                method: "POST",
                dataType: "JSON",
                async: true,
                success: function (data) {
                    if (data.code == 200) {
                        $(".brand-list-table").append('<li class="brand-list-row">' +
                            '<span class="brand-list-col-1">' + params.brandName + '</span>' +
                            '<span class="brand-list-col-2">' + params.brandSign + '</span>' +
                            '<span class="brand-list-col-3">' +
                            '<span>EDIT</span>' +
                            '<span>DEL.</span>' +
                            '</span>');
                        closeFloat();
                    }
                },
                error: function (data) {
                    result = "ERROR";
                }
            });
            return result;
        }

    });
});