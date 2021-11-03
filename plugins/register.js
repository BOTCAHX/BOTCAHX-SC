
const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  let uname = conn.getName(m.sender)
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar ${namalu}.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 90) throw 'Umur terlalu tua'
  if (age < 3) throw 'Bayi bisa ngetik sesuai format bjir ._.'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  user.serial = sn
  
  m.reply(`
◪ *「 DAFTAR BERHASIL 」*
╰───────────────────╮
╭───────────────────╯
├❏ Nama : ${name}
├❏ Umur : ${age} tahun
├❏ SN: ${sn}
╰───────────────────╯
`.trim())
u = 'Klik Tombol Rules untuk melihat peraturan yang ada di bot ini\nSilahkan klik tombol menu untuk menggunakan Bot'
await conn.send2Button(m.chat, u, footer, 'Rules Bot', '#rules', 'Tampilkan Menu', '#menu', m)
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
