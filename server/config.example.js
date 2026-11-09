'use strict'

// 复制为 config.js 并填入自己的密钥（config.js 已加入 .gitignore）
module.exports = {
  host: '127.0.0.1',
  port: 3210,
  appToken: '换成一串随机字符，与 App 的 services/ai/apiConfig.js 保持一致',
  rateLimitPerMinute: 20,
  provider: 'deepseek',
  deepseek: {
    baseUrl: 'https://api.deepseek.com',
    apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    model: 'deepseek-chat'
  },
  nuwax: {
    baseUrl: 'https://agent.nuwax.com',
    apiKey: 'ak-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    agentId: 0,
    devMode: true
  }
}
