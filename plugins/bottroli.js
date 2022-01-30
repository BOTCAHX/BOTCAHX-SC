let fs = require('fs')
let handler  = async (m, { conn, usedPrefix }) => {
prep = conn.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 999999999999, status: 1,
message: `Troli Ni Bang`,
orderTitle: 'B',
sellerJid: '0@s.whatsapp.net',
thumbnail: fs.readFileSync('./src/donasi.jpg')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
}



handler.help = ['troli']

handler.tags = ['owner']

handler.command = /^troli$/i
handler.owner = true


module.exports = handler
