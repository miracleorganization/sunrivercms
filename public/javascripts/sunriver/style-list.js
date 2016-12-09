/**
 * Created by wangyouzhi on 2016/11/25.
 */
"use strict";
require(['jquery'], function ($) {
    $(function () {

        init();

        function init() {
            $("#create").on("click", openFloat);
            $("#submit").on("click", submitHandler);
            $("#cancel-1, #cancel-2, #cancel-3, #cancel-4").on("click", closeFloat);
        }

        /**
         * 打开浮层
         */
        function openFloat() {
            $("#create-edit-float").show();
        }

        /**
         * 关闭浮层
         */
        function closeFloat() {
            $("#create-edit-float").hide();
            $("#dialog").hide();
            clearData();
        }

        /**
         * 情况浮层的内容
         */
        function clearData() {
            $(".style-list-item-warning p").text("");
            $("#params-style-name, #params-style-sign").val("");
        }

        /**
         * 获取新建、编辑的 input 数据
         */
        function getData() {
            var params = {};
            params.styleName = $("#params-style-name").val();
            params.styleSign = $("#params-style-sign").val();
            return params;
        }

        /**
         * 提交按钮
         */
        function submitHandler() {
            var params = getData();

            // 判断 style_name 不为空
            if (!params.styleName) {
                return;
            }

            // 判断 style_sign 不为空
            if (!params.styleSign) {
                return;
            }
            console.log(111);
            submitAjax(params);
        }

        /**
         * 提交表单
         * @param params
         */
        function submitAjax(params) {
            $.ajax({
                url: "/style/style-new",
                data: params,
                type: "POST",
                dataType: "json",
                async: true,
                success: function (data) {
                    console.log(data);
                    if (data.code == 200) {
                        location.reload();
                    }
                },
                error: function (data) {

                }
            });
        }
    })
});