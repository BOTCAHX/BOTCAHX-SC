let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  if (/^tod$/i.test(command)) {
    conn.send3Button(m.chat, 'Truth or Dare', footer, 'Truth', '#truth', 'Dare', '#dare', 'RANDOM', `${pickRandom(['#dare', '#truth'])}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})
  }
  if (/^truth$/i.test(command)) {
    let res = await fetch(global.API('pencarikode', '/api/truthid', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (json.message == "") throw json
    conn.send2Button(m.chat, json.message, footer, 'Truth', ',#truth', 'Dare', '#dare', m, { contextInfo: { forwardingScore: 999, isForwarded: true }})


  }
  if (/^dare$/i.test(command)) {
    let res = await fetch(global.API('pencarikode', '/api/dareid', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (json.message == "") throw json
    conn.send2Button(m.chat, json.message, footer, 'Truth', '#truth', 'Dare', '#dare', m, { contextInfo: { forwardingScore: 999, isForwarded: true }})


  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}