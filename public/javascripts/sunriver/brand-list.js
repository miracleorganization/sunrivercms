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
            $(".brand-list-row .delete").on("click", deleteBrand);
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
         * 新建品牌 ajax 数据发送
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
                    alert("添加失败，请联系管理员");
                }
            });
        }

        /**
         * 删除品牌
         */
        function deleteBrand() {
            var params = {};
            var _id = $(this).attr('data-id');
            var _name = $(this).closest(".brand-list-row").find(".brand-list-col-1").text();
            params.id = _id;
            openConfirmFloat(_name, params);
        }

        /**
         * confirm 删除确认框浮层
         * @param name
         * @param params
         */
        function openConfirmFloat(name, params) {
            $("#confirm-float").show();
            $(".brand-list-item-warning p").text(name);
            $("#delete-cancel").on("click", function () {
                $(".brand-list-float").hide();
                $(".brand-list-item-warning p").text("");
            });
            $("#delete-confirm").on("click", function () {
                $(".brand-list-float").hide();
                $(".brand-list-item-warning p").text("");
                ajaxDelete(params);
            })
        }

        /**
         * 删除品牌 ajax
         * @param URL
         * @param params
         */
        function ajaxDelete(params) {
            var URL = "/manage/brand-list-delete-action";
            $.ajax({
                url: URL,
                data: params,
                type: "POST",
                dataType: "json",
                async: true,
                success: function (data) {
                    if (data.code == 200) {
                        $("[data-id=" + params.id + "]").closest(".brand-list-row").remove();
                    }
                },
                error: function (data) {
                    alert("出错啦，联系管理员");
                }
            });
        }

    });
});