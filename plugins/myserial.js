const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
//tag = `@${m.sender.split`@`[0]}`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let user = global.db.data.users[who]
m.reply(`Dompet @${who.split`@`[0]}\n
Money : *${user.money}*
Limit : ${user.limit}
Seial Number : ${user.serial}`)
//conn.send2Button(m.chat, u, footer, 'Rules Bot', '#rules', 'Tampilkan Menu', '#menu', m)
}
handler.help = ['mysn', 'sn', 'myserial'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']
handler.private = true
handler.command = /^(my)serial|sn$/i

module.exports = handler
