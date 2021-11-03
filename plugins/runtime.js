let handler  = async (m, { itsu, usedPrefix: _p }) => {
let { performance } = require('perf_hooks')
let fs = require('fs')
let pelo = fs.readFileSync('./src/mike.png')
let peli = fs.readFileSync('./src/mikey.jpg')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
					runtime = process.uptime()
					teks = `${global.packname}\n\n${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `teks`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
					}
					m.reply(teks)
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^runtime$/i

module.exports = handler