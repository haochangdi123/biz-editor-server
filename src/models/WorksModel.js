/**
 * @description mongoose 利用Schema 生成模型
 */

const mongoose = require('../db/mongoose')

const WorkSchema = mongoose.Schema(
    {
        // mongoose 会自动生成id 不需要自己设置
        title: String,
        components: [Object], // 页面的组件列表
        props: Object, // 页面的属性，保证扩展性
        setting: Object, // 页面的属性，保证扩展性
    },
    { timestamp: true }
)

const WorksModel = mongoose.model('work', WorkSchema)

module.exports = {
    WorksModel,
}
