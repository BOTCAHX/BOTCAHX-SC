let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋\nsaya adalah ${namabot}, ${namabot} adalah Sebuah Bot yang bisa membantumu disini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), footer, 'Menu', '.menu', m)
	}

handler.command = /^(salken)$/i

module.exports = handler