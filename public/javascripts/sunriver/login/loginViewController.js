/**
 * Created by wangyouzhi on 2016/11/23.
 */
require(['jquery', 'sunriver/login/loginService'], function ($, service) {
    init();

    /**
     * 封装事件的监听
     */
    function init() {
        $(".login-username, .login-password").on("focus", hideWrongInformation);
        $(".login-submit").on("click", checkLoginInformation);
    }

    /**
     * 隐藏错误信息
     */
    function hideWrongInformation() {
        $(".wrong-information").fadeOut();
    }

    /**
     * 验证账号密码不为空
     */
    function checkLoginInformation() {
        var loginInformation = new Object();
        loginInformation.username = $(".login-username").val();
        loginInformation.password = $(".login-password").val();

        return service.checkLoginInformation(loginInformation);
    }
});