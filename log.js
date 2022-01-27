const log4js = require('log4js');

log4js.configure({
    appenders: {
        file: {
            type: 'DateFile', // 文件以日期命名
            filename: 'logs/app', // 文件存放目录
            pattern: '-yyyy-MM-dd.log', // 文件名称格式
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
            appenders: ['file'],
            level: 'debug'
        }
    }
})

module.exports = log4js.getLogger()
