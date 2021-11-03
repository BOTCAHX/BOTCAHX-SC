let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
m.reply(wait)
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/lolice', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'lolice.png', 'liuliuliuliuliu kami dengar disini ada lolicon', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}

handler.help = ['lolice']
handler.tags = ['maker', 'anime']

handler.command = /^(lolice)$/i

module.exports = handler
