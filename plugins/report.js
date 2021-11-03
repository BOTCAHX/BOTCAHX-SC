let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${usedPrefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
    if (text.length < 1) throw `Laporan terlalu pendek, minimal 5 huruf!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\nwa.me/${m.sender.split`@`[0]}\n\nPesan : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', teks, m)
    /*conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })*/
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(bug|report|request)$/i
module.exports = handler