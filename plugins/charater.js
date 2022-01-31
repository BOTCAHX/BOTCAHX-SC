let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://hardianto.xyz/api/search/imagechar?query=Tanjiro&apikey=hardianto`)).buffer(), 'Nih kak', 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['charater']
handler.tags = ['anime']
handler.command = /^(charater)$/i
handler.register = true

handler.limit = true

module.exports = handler
