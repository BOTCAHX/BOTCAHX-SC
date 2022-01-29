let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://api.xteam.xyz/randomimage/husbu2?APIKEY=apivproject`)
json = await heum.buffer()
// conn.sendFile(m.chat, json, 'loli.jpg', 'Lomlinya kak', m, false)
conn.sendButtonImg(m.chat, json, kasihcaption, footer, 'NEXT', `${usedPrefix + command}`, m)
//sendButtonImg(jid, content, url, footer, button1, row1, options = {}) {
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^husbu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
