/**
 * Created by wangyouzhi on 2016/12/15.
 */
module.exports = {
    /**
     * 查询所有颜色
     */
    queryAll: "SELECT * FROM color;",

    /**
     * 增加颜色
     */
    insert: "INSERT INTO color(color_name, color_sign, color_code) VALUES(?, ?, ?);",

    /**
     * 编辑颜色
     */
    updateById: "UPDATE color SET color_name=?, color_sign=?, color_code=? WHERE id=?;",

    /**
     * 删除颜色
     */
    deleteById: "DELETE FROM color WHERE id=?;",
};