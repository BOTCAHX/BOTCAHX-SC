let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  m.reply(global.wait)
  let res = await (await fetch(`https://api.xteam.xyz/randomimage/uniform?apikey=${xteamkey}`)).buffer()
  conn.sendButtomImg(m.chat, res, `wangy wangy wangy`, footer, 'Next',`${usedPrefix + command}`, m, false)
}
handler.help = ['uniform']
handler.tags = ['hentai']

handler.command = /^(uniform)$/i

module.exports = handler