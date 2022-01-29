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
  return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
					runtime = process.uptime()
					teks = `
┌〔  _*Runtime*_  〕
├  _*${kyun(runtime)}*_
├ _*RAM USAGE*_ _*${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*_
├ _*Donasi lewat Dana : 082221792667*_
├ _*Donasi lewat Pulsa : 082221792667*_
└────`
					run = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `teks`
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
itemCount: -2022, status: 500,
surface: 999,
message: teks,
description: 'Cript',
orderTitle: 'node',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: 'Runtime',
totalAmount1000: '1000000',
sellerJid: '6282320730684@s.whatsapp.net',
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
