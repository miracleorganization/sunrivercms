/**
 * Created by wangyouzhi on 2016/11/30.
 */
module.exports = {
    /**
     * 插入款式
     */
    insert: "insert style(style_name, style_sign) values(?, ?)",

    /**
     * 更新款式
     */
    update: "update style set style_sign = ? where id = ?",

    /**
     * 查询所有款式
     */
    queryAll: "select * from style",

    /**
     * 通过 id 删除款式
     */
    deleteById: "delete from style where id = ?"
};