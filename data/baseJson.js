/**
 * Created by wangyouzhi on 2016/11/27.
 */

/**
 * baseJson
 * @type {{username: string, login: string, data: string}}
 */
var baseJson = function () {
    this.username = null;
    this.login = false;
    this.data = null;
    this.code = null;
    this.msg = null;
};

module.exports = baseJson;