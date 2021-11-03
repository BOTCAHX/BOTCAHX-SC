let fetch = require('node-fetch')
let waifu = require('nekos.life')
let neko = new waifu()
     let handler  = async (m, { conn, args }) => {
     kk = await neko.sfw.avatar()
     m.reply(wait)
     conn.sendFile(m.chat, kk.url, 'avatar.jpg', kasihcaption, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['ppwibu']
handler.tags = ['wibu']
handler.command = /^ppwibu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler