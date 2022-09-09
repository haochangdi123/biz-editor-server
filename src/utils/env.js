/**
 * 环境变量
 */

const ENV = process.env.NODE_ENV || ''

module.exports = {
    ENV,
    isPrd: ENV === 'production',
    isPrdDev: ENV === 'prf_dev',
    isDev: ENV === 'dev',
    isTest: ENV.indexOf('test') === 0,
    isTestLocal: ENV === 'test_local', // 本地测试
    isTestRemote: ENV === 'test_remote', // 远程（手机）测试
}
