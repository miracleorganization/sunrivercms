/**
 * @author wangyouzhi
 * @date 2017/1/17
 */
require(['jquery', 'sunriver/style/styleListService'], function ($, service) {
    init();

    function init() {
        $("#create").on("click", {option: "create"}, openCreateEditFloat);
        $("#cancel-1, #cancel-2, #cancel-3, #cancel-4").on("click", closeFloat);
        $("#submit").on("click", submitCreateInformation);
        $("[data-cu='edit']").on("click", {option: "edit"}, openCreateEditFloat);
        $("[data-cu='del']").on("click", getDeleteInformation);
        $("#confirm").on("click", confirmToDelete);
    }

    /**
     * 打开浮层，判断新增或编辑操作
     * @param e
     */
    function openCreateEditFloat(e) {
        if (e.data.option == "create") {
            $("#create-edit-float").attr("data-option", "create");
            $("#create-edit-float").show();
        }
        if (e.data.option == "edit") {
            $("#create-edit-float").attr("data-option", "edit");
            var param = new Object();
            param.id = $(this).closest("li.style-list-row").attr("data-id");
            param.styleName = $(this).closest("li.style-list-row").find(".style-list-col-1").text();
            param.styleSign = $(this).closest("li.style-list-row").find(".style-list-col-2").text();
            $("#params-style-name").val(param.styleName);
            $("#params-style-sign").val(param.styleSign);
            $("#create-edit-float").attr("data-id", param.id);
            $("#create-edit-float").show();
        }
    }

    /**
     * 关闭所有浮层，并且进行数据清空
     */
    function closeFloat() {
        $("#create-edit-float").hide();
        $("#dialog").hide();

        // 清空数据
        $("#create-edit-float").attr("data-option", "");
        $("#params-style-name").val("");
        $("#params-style-sign").val("");
        $("#create-edit-float").attr("data-id", "");
        $("#dialog").find("p").text("");
        $("#dialog").attr("data-id", "");
    }

    /**
     * 提交新建或编辑数据
     */
    function submitCreateInformation() {
        var option = $("#create-edit-float").attr("data-option");
        var request = new Object();
        request.styleName = $("#params-style-name").val();
        request.styleSign = $("#params-style-sign").val();

        if (option == "create") {
            service.checkRequest(option, request, addNewStyle);
        }
        if (option == "edit") {
            request.id = $("#create-edit-float").attr("data-id");
            service.checkRequest(option, request, changeStyleItem);
        }
    }

    /**
     * 添加新的样式到页面
     * @param data
     */
    function addNewStyle(data) {
        var id = data.id;
        var styleName = data.style_name;
        var styleSign = data.style_sign;
        $("<li class='style-list-row' data-id=" + id + ">"
            + "<span class='style-list-col-1'>" + styleName + "</span>"
            + "<span class='style-list-col-2'>" + styleSign + "</span>"
            + "<span class='style-list-col-3'>"
            + "<span data-cu='edit'>EDIT</span>"
            + "<span data-cu='del'>DEL.</span>"
            + "</span>"
            + "</li>").appendTo(".style-list-table");

        closeFloat();
        init();
    }

    /**
     * 修改更新的 style 信息
     * @param data
     */
    function changeStyleItem(data) {
        var dom = $(".style-list-row").filter("[data-id=" + data.id + "]");
        dom.find(".style-list-col-1").text(data.style_name);
        dom.find(".style-list-col-2").text(data.style_sign);

        closeFloat();
        init();
    }

    /**
     * 要删除的数据打包
     */
    function getDeleteInformation() {
        var param = new Object();
        param.id = $(this).closest("li.style-list-row").attr("data-id");
        param.styleName = $(this).closest("li.style-list-row").find(".style-list-col-1").text();
        $("#dialog").find("p").text(param.styleName);
        $("#dialog").attr("data-id", param.id);
        $("#dialog").show();
    }

    /**
     * 确定删除
     */
    function confirmToDelete() {
        var request = new Object();
        request.id = $("#dialog").attr("data-id");
        service.deleteStyle(request, removeStyle);
    }

    /**
     * 移除懂
     * @param status
     */
    function removeStyle(data) {
        var id = data.id;
        $(".style-list-row").filter("[data-id=" + id + "]").remove();
        closeFloat();
    }
});