let handler = async (m, { args, usedprefix, command }) => {

if (!args[0]) throw 'usernamenya mana om\ncontoh ilmanhdyt'
if (!args[1]) throw 'repo nya mana?\ncontoh shiraoribot'

let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
//byrizkyadi
m.reply(`waiting for compress to zip`)
conn.sendfile( m.chat, url, 'repo.zip', null, m)

}
handler.help = ['githubdl']
handler.tags = ['internet']
handler.command = /githubdl/i

handler.limit = 5

module.exports = handler
