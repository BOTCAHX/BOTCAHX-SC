let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
 let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i

module.exports = handler
