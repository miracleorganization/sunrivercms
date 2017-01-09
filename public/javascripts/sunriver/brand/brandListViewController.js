/**
 * Created by wangyouzhi on 2017/1/9.
 */
require(['jquery', 'sunriver/brand/brandListService'], function ($, service) {
    init();

    /**
     * 处理事件的监听
     */
    function init() {
        $("#create").on("click", {option: "create"}, openCreateEditFloat);
        $(".brand-list-float-cancel, #delete-cancel, #create-edit-cancel").on("click", closeFloat);
        $("#create-edit-confirm").on("click", getCreateEditRequest);
    }

    /**
     * 新建品牌
     */
    function openCreateEditFloat(e) {
        $("#create-edit-float").show().attr("data-option", e.data.option);
    }

    /**
     * 关闭浮层，并且进行数据清空
     */
    function closeFloat() {
        $("#confirm-float").hide();
        $("#create-edit-float").hide().attr("data-option", "");

        $("#confirm-float p").text("");
        $("#brandName, #brandSign").val("");
    }

    /**
     * 获取数据
     */
    function getCreateEditRequest() {
        var request = new Object();
        request.brandName = $("#brandName").val();
        request.brandSign = $("#brandSign").val();
        service.checkRequest(request, addCreatedBrand);
    }

    /**
     * 添加新增的 brand 到页面
     * @param result
     */
    function addCreatedBrand(result) {
        $("<li class='brand-list-row'>"
            + "<span class='brand-list-col-1'>" + result.brand_name + "</span>"
            + "<span class='brand-list-col-2'>" + result.brand_sign + "</span>"
            + "<span class='brand-list-col-3' data-id='" + result.id + "'>"
            + "<span class='edit'>EDIT</span>"
            + "<span class='delete'>DEL.</span>"
            + "</span>"
            + "</li>").appendTo($(".brand-list-table"));

        closeFloat();
        init();
    }
});
