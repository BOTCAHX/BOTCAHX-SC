const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler  = async (m, { conn, text }) => {
m.reply(wait)
   pp = `https://xteam.xyz/videomaker/poly?text=${text}&APIKEY=${xteamkey}`
                     await sticker(false, pp, global.packname, '').then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  if (!text) throw 'Teksnya.. mana sayang?'
}
handler.help = ['poly <teks>']
//handler.tags = ['creator']
handler.command = /^sleding|poly$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
