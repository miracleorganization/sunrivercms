/**
 * ORM database configuration
 * @author Youzhi, Wang
 * @date 2016-12-30
 * @type {{database: string, protocol: string, host: string, username: string, password: string, query: {pool: boolean}}}
 */
module.exports = {
    protocol: "mysql",
    host: "127.0.0.1",
    database: "mycms",
    username: "root",
    password: "rootroot",
    query: {
        pool: true
    }
};