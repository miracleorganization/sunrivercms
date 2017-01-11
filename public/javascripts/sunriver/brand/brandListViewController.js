/**
 * Created by wangyouzhi on 2017/1/9.
 */
require(['jquery', 'sunriver/brand/brandListService'], function ($, service) {
    init();

    /**
     * 处理事件的监听
     */
    function init() {
        // 新建品牌
        $("#create").on("click", {option: "create"}, openCreateEditFloat);
        // 编辑品牌
        $(".edit").on("click", {option: "edit"}, openCreateEditFloat);
        // 新建、编辑浮层提交事件
        $("#create-edit-confirm").on("click", getCreateEditRequest);
        // 所有浮层取消事件
        $(".brand-list-float-cancel, #delete-cancel, #create-edit-cancel").on("click", closeFloat);
        // 删除品牌
        $(".delete").on("click", openDeleteFloat);
        // 确定删除事件
        $("#delete-confirm").on("click", confirmToDelete);
    }

    /**
     * 新建品牌
     */
    function openCreateEditFloat(e) {
        if (e.data.option == "edit") {
            var id = $(this).closest(".brand-list-row").find(".brand-list-col-3").attr("data-id");
            var brandName = $(this).closest(".brand-list-row").find(".brand-list-col-1").text();
            var brandSign = $(this).closest(".brand-list-row").find(".brand-list-col-2").text();
            $("#create-edit-float").attr("data-id", id);
            $("#brandName").val(brandName);
            $("#brandSign").val(brandSign);
        }
        $("#create-edit-float").show().attr("data-option", e.data.option);
    }

    /**
     * 关闭浮层，并且进行数据清空
     */
    function closeFloat() {
        $("#confirm-float").hide().attr("data-id", "");
        ;
        $("#create-edit-float").hide().attr({"data-option": "", "data-id": ""});

        $("#confirm-float p").text("");
        $("#brandName, #brandSign").val("");
    }

    /**
     * 获取数据发出请求
     */
    function getCreateEditRequest() {
        var option = $("#create-edit-float").attr("data-option");
        var request = new Object();
        request.brandName = $("#brandName").val();
        request.brandSign = $("#brandSign").val();

        if (option == "edit") {
            request.id = $("#create-edit-float").attr("data-id");
            service.checkRequest(option, request, updateBrand);
        } else {
            service.checkRequest(option, request, addCreatedBrand);
        }
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

    /**
     * 更新页面的 brand 信息
     * @param result
     */
    function updateBrand(result) {
        var dom = $(".brand-list-row").find("[data-id=" + result.id + "]");
        dom.closest(".brand-list-row").find(".brand-list-col-1").text(result.brand_name);
        dom.closest(".brand-list-row").find(".brand-list-col-2").text(result.brand_sign);

        closeFloat();
    }

    /**
     * 打开确认浮层，打包数据
     */
    function openDeleteFloat() {
        var id = $(this).closest(".brand-list-row").find(".brand-list-col-3").attr("data-id");
        var brandName = $(this).closest(".brand-list-row").find(".brand-list-col-1").text();

        $("#confirm-float").find("p").text(brandName);
        $("#confirm-float").show().attr("data-id", id);
    }

    /**
     * 确认删除品牌
     */
    function confirmToDelete() {
        var request = new Object();
        request.id = $("#confirm-float").attr("data-id");
        service.deleteBrand(request, removeBrandItem);

        closeFloat();
    }

    /**
     * 移除删除的品牌
     */
    function removeBrandItem(result) {
        $(".brand-list-row").find("[data-id = " + result.id + "]").closest(".brand-list-row").remove();
    }
});
