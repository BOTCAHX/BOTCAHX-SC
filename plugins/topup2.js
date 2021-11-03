let handler  = async (m, { conn, command, args, text, usedPrefix }) => {
	let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        if (!text) throw `Perintah Salah\nContoh :\n${usedPrefix + command} @tag_member spasi jumlah\n\nContoh :\n${usedPrefix + command} @tag_member 1000`
        let name = `@${who.split`@`[0]}`
        let users = global.db.data.users
	users[who].limit += count * 1
                        conn.reply(m.chat, `Berhasil mentopup ${name} Limit sebesar ${count}`.trim(), m)
                        }
                        
handler.help = ['topup <Args>']
handler.tags = ['rpg']
handler.command = /^tplimit|tpl|topuplimit$/i
handler.mods = true

module.exports = handler