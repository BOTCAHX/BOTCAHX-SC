let handler  = async (m, { conn, usedPrefix: _p }) => {
let { performance } = require('perf_hooks')
let fs = require('fs')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `\n\t\t*「 \t ${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik \t」*\n`
}
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `TioOfc>//<`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
					}
						    
						     prep = conn.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: +2022, status: 500,
surface: 999,
message: teks,
description: 'Tio',
orderTitle: 'Run',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: 'Rp.',
totalAmount1000: '2022',
sellerJid: '19592142111@s.whatsapp.net',
thumbnail: global.image3
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
				/*	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)*/
}

handler.help = ['runtime']
handler.tags = ['main']
handler.command = /^runtime$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler
