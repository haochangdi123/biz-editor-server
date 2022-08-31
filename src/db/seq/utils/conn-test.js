/**
 * sequelize 数据库连接测试
 */

const seq = require('../seq')

seq.authenticate()
  .then(() => {
    console.log('ok')
  })
  .catch((err) => {
    console.log('===========err=========================');
    console.log(err);
    console.log('====================================');
    console.log('fail');
  })
  .finally(() => {
    process.exit()
  })