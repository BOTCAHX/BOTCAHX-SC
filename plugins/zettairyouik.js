let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command}) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/zettairyouiki?apikey=${xteamkey}`
  await conn.sendFile(m.chat, res, 'zettairyouiki.jpg', kasihcaption, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
//await conn.sendButtonImg(m.chat, res, kasihcaption, footer, 'Next', `${usedPrefix+command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['zettairyouiki'].map(v => v + ' ')
handler.tags = ['random', 'anime']

handler.command = /^(zettairyouiki)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

