let fetch = require('node-fetch')
let handler = async (m, { text }) => {
m.reply(wait)
 let url = await fetch('https://api.zeks.xyz/api/memeindo?apikey=caliph_71')
  let barbar = await url.json()
conn.sendFile(m.chat, barbar.result, 'memeindo', JSON.stringify(barbar, null, 2), m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.command = /^(memeindo)$/i
handler.register = true
handler.private = false
handler.limit = true

module.exports = handler