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
        }

        /**
         * 打开浮层
         */
        function openFloat() {
            $("#create-edit-float").show();
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

            submitAjax(params);
        }

        /**
         * 提交表单
         * @param params
         */
        function submitAjax(params) {
            $.ajax({
                url: "",
                data: params,
                type: "POST",
                dataType: "json",
                async: true,
                success: function (data) {

                },
                error: function (data) {

                }
            });
        }
    })
});