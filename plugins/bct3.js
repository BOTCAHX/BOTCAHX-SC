let handler  = async (m, { conn, text, usedPrefix, command }) => {
let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
if (!text) throw `uhm.. teksnya mana?\nContoh :\n\n${usedPrefix + command} Halo|Tampilkan Menu|#menu`
m.reply(global.wait)
let [t1, t2, t3, t4, t5, t6, t7] = text.split`|`
conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
for (let id of chats) await conn.sendButton(id, t1 + '\n\n' + readMore + ` 「 ${bc} Broadcast 」`, footer, t2, t3, t4, t5, t6, t7)
m.reply('Selesai Broadcast All Chat 👍')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast3|bc3)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

