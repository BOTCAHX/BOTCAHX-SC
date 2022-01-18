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
═〘 Rules ${namabot} 〙═
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔖 _Mohon untuk tidak Spam Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi Pengguna Bot yang Spam_
🔖 _Mohon untuk tidak Menelpon Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi orang yang nelpon Bot_
🔖 _Kami tidak bertanggung jawab atas penyalahgunaan Bot_
🔖 _Kami tidak bertanggung jawab atas kebocoran data pribadi anda_
🔖 _Webesite Official Bot_  https://tioprm.herokuapp.com/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
═ 〘 BOT STATUS 〙 ═
➥ ${namabot} Versi ${package.version}
➥ *HomePage:* ${(package.homepage ? package.homepage.url || package.homepage : '[unknown github url]')}
➥ *Issue:* ${package.bugs.url}
➥ *Ping:* ${neww - old} *ms*
➥ *Total user:* ${totalreg} *user*
➥ *Uptime:* ${uptime}
➥ *Baterai:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
➥ *Aktif selama:* ${uptime}
🔖 *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
🔖 *${conn.blocklist.length}* Terblock
🔖 *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
➥ Request? ${package.bugs.url}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
═ 〘 DONASI 〙 ═
🔖 Pulsa : 082221792667
🔖 Dana : 082221792667
🔖 Official Grup :
➥Grup 1 :
➥${gc1}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ©2021 ${namabot}
 Script original by BOTCAHX
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
