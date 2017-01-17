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
    }

    /**
     * 打开浮层，判断新增或编辑操作
     * @param e
     */
    function openCreateEditFloat(e) {
        if (e.data.option == "create") {
            $("#create-edit-float").show();
            $("#create-edit-float").attr("data-option", "create");
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
    }

    /**
     * 提交新建或编辑数据
     */
    function submitCreateInformation() {
        var option = $("#create-edit-float").attr("data-option");
        var request = new Object();
        request.styleName = $("#params-style-name").val();
        request.styleSign = $("#params-style-sign").val();

        service.checkRequest(option, request, addNewStyle);
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
});