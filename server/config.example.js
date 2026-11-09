'use strict'

// 复制为 config.js 并填入自己的密钥（config.js 已加入 .gitignore）
module.exports = {
\thost: '127.0.0.1',
\tport: 3210,
\tappToken: '换成一串随机字符，与 App 的 services/ai/apiConfig.js 保持一致',
\trateLimitPerMinute: 20,
\tprovider: 'deepseek',
\tdeepseek: {
\t\tbaseUrl: 'https://api.deepseek.com',
\t\tapiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
\t\tmodel: 'deepseek-chat'
\t},
\tnuwax: {
\t\tbaseUrl: 'https://agent.nuwax.com',
\t\tapiKey: 'ak-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
\t\tagentId: 0,
\t\tdevMode: true
\t}
}
