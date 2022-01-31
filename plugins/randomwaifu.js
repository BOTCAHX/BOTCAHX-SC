let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://hardianto.xyz/api/anime/random?sfw=smug&apikey=hardianto`)).buffer(), 'Nih kak', 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['randomwaifu']
handler.tags = ['anime']
handler.command = /^(randomwaifu)$/i
handler.register = true

handler.limit = true

module.exports = handler
