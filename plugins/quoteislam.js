let fetch = require('node-fetch')
 let handler = async (m, { conn, usedPrefix, command }) => {
 	let heum = await fetch(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`)
 amin = await heum.json()
    conn.sendButton(m.chat, `${amin.result}`.trim(), footer, 'Quote Islami', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

    }
    
handler.help = ['muslimq']
handler.tags = ['quotes']
handler.command = /^(muslimq)$/i
module.exports = handler