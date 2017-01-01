/**
 * Created by wangyouzhi on 2017/1/2.
 */
define(['jquery', 'sunriver/login/loginModel'], function ($, model) {
    /**
     * 判断账号、密码不为空
     */
    function checkLoginInformation(informationObject) {
        for (var item in informationObject) {
            if (informationObject[item] == undefined || $.trim(informationObject[item].length) == 0) {
                return false;
            }
        }
        return true;
    }

    return {
        checkLoginInformation: checkLoginInformation
    }
});