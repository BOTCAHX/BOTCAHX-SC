let Booru = require('booru')

let handler = async(m, { conn }) => {
m.reply('Loading...')
let img = await Booru.search('kn', ['loli'], { random: true })
img = img[0].data
await conn.sendFile(m.chat, img.file_url, '', '', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler
