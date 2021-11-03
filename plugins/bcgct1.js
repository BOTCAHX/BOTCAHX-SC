let handler  = async (m, { conn, text, usedPrefix, command }) => {
let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
if (!text) throw `uhm.. teksnya mana?\nContoh :\n\n${usedPrefix + command} Halo|Tampilkan Menu|#menu`
m.reply(global.wait)
let [t1, t2, t3] = text.split`|`
conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
for (let id of groups) await conn.sendButton(id, t1 + '\n\n' + readMore + ` 「 ${bc} Group Broadcast 」`, footer, t2, t3)
m.reply('Selesai Broadcast All Group 👍')
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group1|grup1|gc1)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)


/*
let handler  = async (m, { itsu, text, usedPrefix: _p }) => {
  let fs = require('fs')
  let fetch = require('node-fetch')
  const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285240750713-1610340626@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "P", 
            "caption": "「 All Group Broadcast 」", 
            'jpegThumbnail': global.thumb
		}
	}
}
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  try {
    pp = await itsu.getProfilePicture(who)}
    catch (e){
    }

  let groups = itsu.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = await itsu.cMod(m.chat, cc, /bc|broadcast/i.test(text))
  itsu.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) itsu.send2Button(id, text, '© Relldev', 'ok', 'Rhelp', 'owner', _p + 'owner')
  itsu.reply(m.chat, `_Done_`, m)
}


handler.help = ['bcgc-v'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(bcgc-b)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
*/