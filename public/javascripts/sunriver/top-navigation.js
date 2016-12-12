/**
 * Created by wangyouzhi on 2016/11/24.
 */
'use strict';
require(['jquery'], function ($) {

    $(".top-navigation-level-1>li").on("mouseenter",function () {
        var dom = $(this).find(".top-navigation-level-2");
        dom.stop().slideDown(300);
    }).on("mouseleave",function () {
        var dom = $(this).find(".top-navigation-level-2");
        dom.stop().hide();
    });

    $(".welcome-information sup").on("click", function (e) {
        var dom = $(".welcome-information ul");
        dom.slideToggle(100);
    })
});