let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai parameter.\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/xxxx`
    let res = await https://ttdownloader.com/dl.php?v=YTo0OntzOjk6IndhdGVybWFyayI7YjowO3M6NzoidmlkZW9JZCI7czozMjoiM2RjYTY1ZjRiMTQxZDk5MzBhMjM4YjUxNjljMzQxZWIiO3M6MzoidWlkIjtzOjMyOiI4Mjc4NzVjYmM4NDgzZjcwMmMxZDc5NjM5YzgxNzExMSI7czo0OiJ0aW1lIjtpOjE2NDM2MjEwOTU7fQ=='))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.nowatermark, '', '©BOTCAHX', m)
}
handler.command = /^tiktok$/i
handler.tags = ['downloader']
handler.help = ['tiktok']
handler.limit = true
module.exports = handler
