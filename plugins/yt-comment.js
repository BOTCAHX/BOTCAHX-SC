let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Teks nya mana kak?\nContoh :\n${usedPrefix+command} Hai | ${namalu}`
  let [t1, t2] = text.split`|`
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: t1,
    username: t2
  }), 'yt-comment.png', 'Here is your comment', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['maker']

handler.command = /^(ytcomment)$/i

module.exports = handler
