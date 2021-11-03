let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {
m.reply(wait)
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', kasihcaption, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
//conn.sendButton(m.chat, json.url, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i
//ftwrr
module.exports = handler
