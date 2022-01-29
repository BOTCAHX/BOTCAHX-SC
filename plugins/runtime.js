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
┌──〔 Status Bot 〕─⬣
│⬡ Aktif selama ${kyun(runtime)}
│⬡ Baterai *${conn.battery != undefined ? `${conn.battery.value}%* ${conn.battery.live ? '🔌 pengisian' : ''}` : ' tidak diketahui'}
│⬡ *${Object.keys(global.db.data.users).length}* Pengguna
│⬡ *${conn.blocklist.length}* Terblock
│⬡ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
│⬡ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
│⬡ RAM *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB  / ${Math.round(require('os').totalmem / 1024 / 1024)}MB ↺*
└────────⬣
┌──〔 Donasi 〕─⬣
│⬡ Donasi Via Dana : 082221792667
│⬡ Donasi Via Pulsa : 081395861695
└────────⬣
┌──〔 Owner CMD 〕─⬣
│=> .sf 
│=> .totalfitur
│=> .getplugins
└────────⬣`
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
