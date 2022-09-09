/**
 * @description pm2 配置文件，dev 测试机
 * @name 注意： 本地是将package.json `prd-dev` 下的  NODE_ENV=prd_dev   改为：  NODE_ENV=dev
 */

 const appConf = require('./pm2AppConf')

 // 为了测试方便，pm2 进程设置为 1
 appConf.instances = 1
 
 module.exports = {
     apps: [appConf],
 }