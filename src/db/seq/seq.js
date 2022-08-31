/**
 * 配置 sequelize 连接数据库
 */

const Sequelize = require('sequelize')
const { mysqlConf } = require('../../config/index')
const { isPrd, isTest}  = require('../../utils/env')


// 连接配置
const { host, user, password, port, database } = mysqlConf;
const conf = {
  host,
  port,
  dialect: 'mysql'
};

// 测试环境不打印日志
if(isTest) {
  conf.logging = () => {} // 默认console.log
}

// 线上环境  连接池
if (isPrd) {
  conf.pool = {
    max: 5, // 最大连接数
    min: 0, // 最小连接数
    idle: 10000, // 如果一个线程 10s 没有使用过，释放
  };
}

// 创建连接
const seq = new Sequelize(database, user, password, conf);

module.exports = seq
