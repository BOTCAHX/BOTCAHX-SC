let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
   //response = args.join(' ')
  //if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`
  await conn.sendFile(m.chat, res, 'nama.jpg', kasihcaption, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

//conn.sendButtonImg(m.chat, res, kasihcaption, footer, 'Quotes Gambar', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})
//await conn.sendButtonImg(m.chat, `https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`, kasihcaption, footer, 'Next', '#quotesimg', m)// { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['quotesimg'].map(v => v + ' <teks>')
handler.tags = ['image']
handler.command = /^(quotesimg)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
