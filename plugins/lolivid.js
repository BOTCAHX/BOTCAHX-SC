let fetch = require('node-fetch')
async function getRandom(url) {
return Math.floor(Math.random() * url)
}
let handler  = async (m, { conn }) => {
m.reply(wait)
conn.sendFile(m.chat, `https://recoders-area.caliph.repl.co/api/lolivid`, '', ``, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['lolivid']
handler.tags = ['video']
handler.command = /^(lolivid|loliv)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler