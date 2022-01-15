let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Kak ${ye} Minta-minta Mulu Perasaan:v
Mending Donasi Aja :082221792667
Group Bot
${gc1}
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = ['script', 'sc', 'scbot', 'github']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
