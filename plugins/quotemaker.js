let handler = async (m, { conn, text, usedPrefix, command }) => {
  let [teks, wm] = text.split`|`
  if (!text) throw `Uhm...Teksnya mana?\nComtoh :\n${usedPrefix+command} Tetaplah hidup walau tidak berguna:) | ${namalu}`
  m.reply(wait)
  //await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text: teks, wm: wm ? wm : conn.getName(m.sender) }, 'APIKEY'), 'file.jpg', 'Nih', m)
  await conn.sendFile(m.chat, `https://xteam.xyz/quotemaker?text=${teks}&wm=${wm}&APIKEY=${xteamkey}`, 'file.jpg', kasihcaption, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['quote'].map(v => v + 'maker <teks>|<wm>')
handler.tags = ['nulis']
handler.command = /^quotemaker$/i

handler.limit = true

module.exports = handler
