let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
  conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`)).buffer(), kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}

handler.help= ['hentaipic']
handler.tags = ['hentai']

handler.command = /^hentai(pic)?$/i
module.exports = handler