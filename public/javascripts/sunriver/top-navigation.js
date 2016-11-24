/**
 * Created by wangyouzhi on 2016/11/24.
 */
'use strict';
require(['jquery'], function ($) {

    $(".top-navigation-level-1>li").on("click",function (e) {
        $("body").trigger("click");
        e.stopPropagation();
        var dom = $(this).find(".top-navigation-level-2");
        dom.show();
    });

    $("body").on("click", function () {
        $(".top-navigation-level-2").hide();
        $(".welcome-information ul").hide();
    });

    $(".welcome-information sup").on("click", function (e) {
        e.stopPropagation();
        var dom = $(".welcome-information ul");
        dom.show();
    })
});