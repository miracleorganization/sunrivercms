/**
 * Created by wangyouzhi on 2016/11/25.
 */
"use strict";
require(['jquery'], function ($) {
    $(function () {
        init();
        var _dom = null;

        function init() {
            $("#create").on("click", {option: "new"}, openCreateFloat);
            $(".brand-list-float-cancel, .brand-list-item-option-1").on("click", closeFloat);
            $("#create-edit-float .brand-list-item-option-2").on("click", submit);
            $(".brand-list-row .delete").on("click", deleteBrand);
            $(".brand-list-row .edit").on("click", {option: "edit"}, openCreateFloat);
        }

        /**
         * 显示浮层
         */
        function openCreateFloat(e) {
            var t = $(this);
            $("#brandName").val("");
            $("#brandSign").val("");
            $("#create-edit-float").show();

            if (e.data.option == "edit") {
                getOriginalData(t);
                $("#create-edit-float").attr("data-option", "edit");
            }
            if (e.data.option == "new") {
                $("#create-edit-float").attr("data-option", "new");
            }
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
        function submit() {
            var option = $("#create-edit-float").attr("data-option");
            var params = searchData();
            if (params) {
                if (option == 'new') {
                    var URL = "/manage/brand-list-new-action";
                    ajaxNew(URL, params);
                }
                if (option == 'edit') {
                    var URL = "/manage/brand-list-update-action";
                    params.id = _dom.attr("data-id");
                    ajaxUpdate(URL, params, function (status) {
                        if (status == "success") {
                            _dom.find(".brand-list-col-1").text(params.brandName);
                            _dom.find(".brand-list-col-2").text(params.brandSign);
                            _dom = null;
                        }
                    });
                }
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
                        console.log(data);
                        $(".brand-list-table").append('<li class="brand-list-row" data-id=' + data.data.insertId + '>' +
                            '<span class="brand-list-col-1">' + params.brandName + '</span>' +
                            '<span class="brand-list-col-2">' + params.brandSign + '</span>' +
                            '<span class="brand-list-col-3">' +
                            '<span class="edit">EDIT</span>' +
                            '<span class="delete" data-id=' + data.data.insertId + '>DEL.</span>' +
                            '</span>');
                        closeFloat();
                        init();
                    }
                },
                error: function (data) {
                    confirm("添加失败，请联系管理员");
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
                    confirm("删除失败，联系管理员");
                }
            });
        }

        function ajaxUpdate(URL, params, callback) {
            $.ajax({
                url: URL,
                data: params,
                type: "POST",
                dataType: "json",
                async: true,
                success: function (data) {
                    if (data.code == 200) {
                        callback("success");
                    }
                },
                error: function (data) {
                    confirm("更新失败，请联系管理员");
                }
            });
        }

        function getOriginalData(t) {
            var brandName = t.closest(".brand-list-row").find(".brand-list-col-1").text();
            var brandSign = t.closest(".brand-list-row").find(".brand-list-col-2").text();
            $("#brandName").val(brandName);
            $("#brandSign").val(brandSign);

            _dom = t.closest(".brand-list-row");
        }
    });
});