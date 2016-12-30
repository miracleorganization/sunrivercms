/**
 * Created by wangyouzhi on 2016/12/16.
 */
"use strict";
require(['jquery'], function ($) {
    $(function () {
        init();

        function init() {
            $(".delete-color").on("click", deleteColorHandler);
            $("#input-color-code").on('input', changeColorCodeHandler);
        }

        /**
         * 删除颜色事件
         */
        function deleteColorHandler() {
            var _id = $(this).attr('constant-id');
            var _dom = $(this).closest("li");
            $.ajax({
                url: '/color/color-delete',
                data: {id: _id},
                type: "POST",
                dataType: "json",
                async: true,
                success: function (data) {
                    if (data.code == 200) {
                        _dom.remove();
                    }
                },
                error: function (data) {
                    confirm("删除错误，请重试或者联系管理员")
                }
            });
        }

        /**
         * 输入颜色代码的判断
         */
        function changeColorCodeHandler() {
            let _code = $(this).val();
            let _length = _code.length;
            let _first = _code.slice(0, 1);
            (_length == 7 && _first == "#") ? changeColor(_code) : changeColor();
        }

        /**
         * 修改对应的代码展示
         * @param colorCode
         */
        function changeColor(colorCode) {
            if (colorCode) $(".input-color-show").css('background', colorCode);
            else $(".input-color-show").css('background', "");

        }
    })
});