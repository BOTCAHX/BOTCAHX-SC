let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .horor BOTCAHX'
  m.reply('_Proses..._')
  let res = `https://reysekhaa.herokuapp.com/api/textpro/greenhoror?apikey=apirey&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `© BOTCAHX`, m, false)
}
handler.help = ['horor'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(horor)$/i

module.exports = handler
