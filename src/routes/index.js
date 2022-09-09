const router = require('koa-router')()
const { ENV } = require('../utils/env')
const packageInfo = require('../../package.json')
const testMysqlConn = require('../db/mysql2')
const { WorksModel } = require('../models/WorksModel')
const { cacheGet, cacheSet } = require('../cache/index')

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

/**
 * 注意： 测试时先要打开数据库
 */

// 测试数据库mysql连接
// http://localhost:3000/api/db-check-mysql
router.get('/api/db-check-mysql', async ctx => {
    // 测试 mysql连接
    const mysqlRes = await testMysqlConn()

    ctx.body = {
        errno: 0,
        data: {
            name: 'biz editor server',
            version: packageInfo.version,
            ENV,
            mysqlConn: mysqlRes.length > 0, // true 为连接成功
        },
    }
})

// 测试 mongodb 连接
// http://localhost:3000/api/db-check-mongodb
router.get('/api/db-check-mongodb', async ctx => {
    let mongodbConn
    try {
        mongodbConn = true
        await WorksModel.findOne()
    } catch (ex) {
        mongodbConn = false
    }

    ctx.body = {
        errno: 0,
        data: {
            name: 'biz editor server',
            version: packageInfo.version,
            ENV,
            mongodbConn,
        },
    }
})

// 测试 redis 连接
// http://localhost:3000/api/db-check-redis
router.get('/api/db-check-redis', async ctx => {
    cacheSet('name', 'this is redis server')
    const redisTestVal = await cacheGet('name')

    ctx.body = {
        errno: 0,
        data: {
            name: 'biz editor server',
            version: packageInfo.version,
            ENV,
            redisConn: redisTestVal != null,
        },
    }
})

// 测试数据库连接
// http://localhost:3000/api/db-check
router.get('/api/db-check', async ctx => {
    let mongodbConn
    try {
        mongodbConn = true
        await WorksModel.findOne()
    } catch (ex) {
        mongodbConn = false
    }

    const mysqlRes = await testMysqlConn()

    cacheSet('name', 'this is redis server')
    const redisTestVal = await cacheGet('name')

    ctx.body = {
        errno: 0,
        data: {
            name: 'biz editor server',
            version: packageInfo.version,
            ENV,
            mysqlConn: mysqlRes.length > 0, // true 为连接成功
            mongodbConn,
            redisConn: redisTestVal != null,
        },
    }
})

module.exports = router
