let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'error', m)
  await conn.sendFile(m.chat, json.result.female, '', 'error', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli(loli|loli))$/i

module.exports = handler
