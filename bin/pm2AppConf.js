/**
 * @description pm2 app 配置信息
 */

 const os = require('os')

 const cpuCoreLength = os.cpus().length // CPU 几核
 
 module.exports = {
     name: 'biz-editor-server',
     script: 'bin/www',
     // watch: true,   // 无特殊情况，无需监听，避免一致restart
     ignore_watch: ['node_modules', '__test__', 'logs'],
     instances: cpuCoreLength, // 进程一般和CPU数量一致（本地测试为了方便可以设置为1）
     error_file: './logs/err.log',
     out_file: './logs/out.log',
     log_date_format: 'YYYY-MM-DD HH:mm:ss Z', // Z 表示使用当前时区的时间格式
     combine_logs: true, // 多个实例，合并日志
     max_memory_restart: '300M', // 内存占用超过 300M ，则重启(可以通过pm2 monit 查看左上角的内存，一般为2，3倍就可以)
 }