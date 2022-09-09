/**
 * mysql2 测试链接
 */

const mysql = require('mysql2/promise')
const { mysqlConf } = require('../config/index')

async function testMysqlConn() {
    const connection = await mysql.createConnection(mysqlConf)
    const [rows] = await connection.execute('select now();')
    return rows
}

// 直接执行 node src/db/mysql2.js  可以本地测试
// 注意将module.exports注释
// ;(async () => {
//   const rows = await testMysqlConn()
//   console.log('===========rows=========================');
//   console.log(rows);
//   console.log('===============rows=====================');
// })()

module.exports = testMysqlConn
