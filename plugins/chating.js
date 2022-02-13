let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Kak ${ye} Ini adalah website anonymous chat bot
Kalian cukup daftar nama lalu chating dengan orang random.


• https://anonymous-chat-random-tio.herokuapp.com/

• Rules nya cukup jangan spam dan toxit berlebihan.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['anonymouschat']
handler.tags = ['main']
handler.command = ['anonymouschat']
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
