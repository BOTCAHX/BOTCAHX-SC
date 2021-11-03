let handler = async (m, { conn, text }) => {
if (!text) throw '_Text nya mana tod?_'
let [kiri, kanan] = text.split('|')
await conn.sendFile(m.chat, global.API('https://api.lolhuman.xyz', '/api/photooxy2/battlefield4', {
 text1: kiri,
 text2: kanan,
 theme: 'battlefield4',
 apikey: lolkey
}), 'error cuk', `${kasihcaption}`, m)
}
handler.help = ['battlefield'].map(v => v + ' <teks|teks>')
handler.tags = ['sticker']
handler.command = /^battlefield|bf|btf$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler