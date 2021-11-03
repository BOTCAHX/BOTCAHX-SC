let handler = m => m
//const { MessageType } = require('@adiwajshing/baileys')
//let handler = async (m, { conn, text, participants }) => {
handler.before = async function (m) {
//let users = participants.map(u => u.jid)
    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `waktunya *${namabot}* untuk meninggalkan grup`, null).then(() => {
            this.reply(m.chat, `Silahkan Hubungi @${global.owner[0].split`@`[0]} untuk menambah masa aktif Grup`, null).then(() => {
            /*contextInfo: {
          mentionedJid: users
        },*/
                //this.sendContact(m.chat, global.kontak[0], this.getName(global.kontak[0] + '@s.whatsapp.net'), m).then(() => {
                //@${global.owner[0].split`@`[0]}`,
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}
//}
module.exports = handler