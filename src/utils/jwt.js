/**
 * @description jwt - verify sign (解密/加密)
 */

const util = require('util') // node自带
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/constant')
const { jwtExpiresIn } = require('../config/index')

const verify = util.promisify(jwt.verify)

/**
 * jwt verify 解密
 * @param {string} token token
 */
async function jwtVerify(token) {
    const data = await verify(token.split(' ')[1], JWT_SECRET) // 去掉前面的 Bearer
    return data
}

/**
 * jwt sign  加密
 * @param {Object} data data
 */
function jwtSign(data) {
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: jwtExpiresIn })
    return token
}

module.exports = {
    jwtVerify,
    jwtSign,
}
