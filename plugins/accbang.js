let handler = async (m, { conn, isAdmin }) => {
if (m.fromMe) throw 'Nggak'
if (isAdmin) throw 'Padahal udah jadi admin'
await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^adm$/i
//handler.command = /^(add|tambah|\+)prem$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
