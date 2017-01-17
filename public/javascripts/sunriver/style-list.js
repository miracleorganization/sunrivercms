/**
 * Created by wangyouzhi on 2016/11/25.
 */
"use strict";
require(['jquery'], function ($) {
    $(function () {

        init();

        function init() {
            $("#create").on("click", openFloat);
            $("#cancel-1, #cancel-2, #cancel-3, #cancel-4").on("click", closeFloat);
            $("[constant-cu='edit']").on("click", getEditDate);
            $("[constant-cu='del']").on("click", getItemId);
        }

        /**
         * 打开浮层
         */
        function openFloat(e, params) {
            if (params) {
                $("#params-style-name").val(params.styleName);
                $("#params-style-sign").val(params.styleSign);
                $("#submit").on("click", {params: params}, editHandler);
            } else {
                $("#submit").on("click", addHandler);
            }
            $("#create-edit-float").show();
        }

        /**
         * 关闭浮层
         */
        function closeFloat() {
            $("#create-edit-float").hide();
            $("#dialog").hide();
            clearData();
            $("#submit").off("click");
        }

        /**
         * 情况浮层的内容
         */
        function clearData() {
            $(".style-list-item-warning p").text("");
            $("#params-style-name, #params-style-sign").val("");
            $("#dialog").find(".style-list-item-warning p").text("");
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
        function addHandler() {
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
                url: "/style/style-add",
                data: params,
                type: "POST",
                dataType: "json",
                async: true,
                success: function (data) {
                    if (data.code == 200) {
                        location.reload();
                    }
                },
                error: function (data) {
                    confirm("请重新尝试操作，或者联系管理员解决");
                }
            });
        }

        /**
         * 获取要编辑的数据
         */
        function getEditDate(e) {
            var dom = $(this).closest("li.style-list-row");
            var params = {};
            params.id = dom.attr('constant-id');
            params.styleName = dom.find(".style-list-col-1").text();
            params.styleSign = dom.find(".style-list-col-2").text();

            if (!params.id) {
                return;
            }
            if (!params.styleName) {
                return;
            }
            if (!params.styleSign) {
                return;
            }
            openFloat(e, params);
        }

        /**
         * 编辑 ajax
         */
        function editHandler(e) {
            var params = getData();
            params.id = e.data.params.id;

            $.ajax({
                url: "/style/style-edit",
                data: params,
                type: "POST",
                dataType: "json",
                async: true,
                success: function (data) {
                    if (data.code == 200) {
                        location.reload();
                    }
                },
                error: function (data) {
                    confirm("请重新尝试操作，或者联系管理员解决");
                }
            });
        }

        /**
         * 获取要删除条目的 id
         */
        function getItemId() {
            var dom = $(this).closest("li.style-list-row");
            var params = {};
            params.id = dom.attr("constant-id");
            params.styleName = dom.find(".style-list-col-1").text();

            openDialog(params);
        }

        /**
         * 打开确认对话框
         * @param param
         */
        function openDialog(params) {
            $("#dialog").find(".style-list-item-warning p").text(params.styleName);
            $("#dialog").show();

            $("#confirm").on("click", {id: params.id}, confirmStatus);
        }

        /**
         * 确定删除
         * @param id
         */
        function confirmStatus(e) {
            var id = e.data.id;
            if (!id) {
                return;
            }

            $.ajax({
                url: "/style/style-delete",
                data: {id: id},
                type: "POST",
                dataType: "json",
                async: true,
                success: function (data) {
                    if (data.code == 200) {
                        location.reload();
                    }
                },
                error: function (data) {
                    confirm("请重新尝试操作，或者联系管理员解决");
                }
            });
        }
    })
});