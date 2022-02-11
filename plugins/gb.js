let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Kak ${ye} Kunjungi Website resmi Kami di bawah ini. 
• Donasi Bot via Dana : 082221792667
• Download Tiktok dengan WM : https://tioprm.herokuapp.com/
• Download Tiktok Tanpa WM : https://tiodownloaders.herokuapp.com/
• Website Official : https://botcahx.github.io/price-io/

• Bucin web1 : https://bucinxdbytio-4.tioclkp02.repl.co/
• Bucin web2 : https://botcahx.github.io/BuatKamu/
• Bucin web3 : http://tio-permana-io.vercel.app/
• Group Bot
• ${gc1}
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = ['script', 'sc', 'scbot', 'github']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
