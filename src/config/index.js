/**
 * 连接数据库
 */
module.exports = {
    // 连接 mysql 数据库
    mysqlConf: {
        host: 'localhost',
        user: 'root',
        password: 'hao123chang123',
        port: '3306',
        database: 'imooc_lego_course',
    },
    // 连接 mongodb 数据库
    mongodbConf: {
        host: 'localhost',
        port: '27017',
        dbName: 'imooc_lego_course',
    },
    // 连接 redis 数据库
    redisConf: {
        host: '127.0.0.1',
        port: '6379',
    },
}
