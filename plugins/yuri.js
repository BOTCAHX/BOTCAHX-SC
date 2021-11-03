let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
let handler  = async (m, { conn, args, usedPrefix, command }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
m.reply(wait)
json = (await Neko.nsfw.yuri()).url
await conn.sendFile(m.chat, json, 'yuri.jpg', kasihcaption, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
//await conn.sendButtonImg(m.chat, json, kasihcaption, footer, 'Next', `#yuri`, m, true, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['yuri']
handler.tags = ['sange']
handler.command = /^yuri$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler