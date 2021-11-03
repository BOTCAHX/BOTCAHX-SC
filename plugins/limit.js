let handler = async (m) => {
//tag = `@${m.sender.split`@`[0]}`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let user = global.db.data.users[who]
m.reply(`Dompet @${who.split`@`[0]}\n
💰Money : *${user.money}*
🪙Limit : *${user.limit}* 
📈XP : *${user.exp}* 
🧬Level : *${user.level}*
💳Role : *${user.role}*`)
}
handler.help = ['my [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit|dompet|atm)$/i
module.exports = handler