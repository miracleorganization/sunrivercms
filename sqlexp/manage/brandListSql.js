/**
 * Created by wangyouzhi on 2016/11/27.
 */
module.exports = {
    /**
     * 查询所有
     */
    queryAll: "SELECT * FROM brand",

    /**
     * 插入
     */
    insert: "INSERT brand(brand_name, brand_sign) VALUES(?, ?)",

    /**
     * 通过 id 删除
     */
    deleteById: "DELETE FROM brand WHERE id=?",

    /**
     * 通过 id 更新
     */
    updateById: "UPDATE brand SET brand_name=?, brand_sign=? WHERE id=?"
};