let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  //await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
『 *RULES* 』

_*BOTCAHX*_ merupakan suatu program bot whatsapp, yang menggunakan Heroku
Adapun ketentuan untuk memakai _*BOTCAHX*_. :

*1.* Pengguna dapat menggunakan semua perintah/command dengan batasan limit sebanyak 50 setiap pengguna terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.
*2.* Dilarang Klik Button yg bertujuan nya tidak jelas
*3.* Bot dapat memblokir pengguna/user melanggar rules yang ada di bot ini, rules yang harus dipatuhi oleh pengguna antara lain :
  • Tidak melakukan spam perintah/command yang ada dalam bot ini
*4.* Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash
*5.* Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!\n\n_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

*6* _Mohon untuk tidak Spam Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi Pengguna Bot yang Spam_

*7* _Mohon untuk tidak Menelpon Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi orang yang nelpon Bot_

*8* _Kami tidak bertanggung jawab atas penyalahgunaan Bot_

*9* _Kami tidak bertanggung jawab atas kebocoran data pribadi anda_

*10* _Instagram_ : https://instagram.com/prm2.0?utm_medium=copy_link

*────────────────────────*
═〔 Donasi 〕═
『📱』 Pulsa : 081395861695
『📱』 Dana : 082221792667
*────────────────────────*
═〔 Website 〕═
『 *1* 』 https://tioprm.herokuapp.com/
『 *2* 』 https://tiodownloaders.herokuapp.com/
『 *OFC* 』 *Official Grup Whatsapp* :
『✓』  ${gc1}
*────────────────────────*
═ 〔 Status 〕 ═
『🔖』 ${namabot} Versi ${package.version}
『📚』  *HomePage:* ${(package.homepage ? package.homepage.url || package.homepage : '[unknown github url]')}

『ℹ️』  *Issue:* ${package.bugs.url}

『📶』  *Ping:* ${neww - old} *ms*
『📊』  *Total user:* ${totalreg} *user*
『☁️』  *Uptime:* ${uptime}
『🔋』  *Baterai:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
『⛔』  *${conn.blocklist.length}* Terblock
『🚧』  *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
『📞』  *Request?* ${package.bugs.url}

『🗄️』  *Memory Usage* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*────────────────────────*

©TioOfc - ©2022

 
═〘 ${namabot} 〙 ═
`.trim(), m)
}

handler.help = ['main']
handler.tags = ['infobot', 'rules']
handler.command = handler.command = /^(infobot|rules)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
