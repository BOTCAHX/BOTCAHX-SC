let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { description, author, statistic, link } = json.result
await conn.sendFile(m.chat, link, 'tt.mp4', `
▶ ${statistic.playCount} Views
❤ ${statistic.diggCount} Likes
🔁 ${statistic.shareCount} Shares
💬 ${statistic.commentCount} Comments
- *By:* ${author.nickname} (${author.username})
- *Desc:*
${description}
`.trim(), m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler