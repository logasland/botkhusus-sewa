let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Link tiktok nya mana?*\n\n*contoh:* \n_${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/_`
	let res = await fetch(`https://saipulanuar.ga/api/download/tiktok2?url=` + text + `&apikey=TcFrwf4v`)
	let name = await conn.getName(m.sender)
	let json = await res.json()

conn.sendFile(m.chat, json.result.video.link1, 'fb.mp4', `dah jadi nich!!!\nceban aja kak ${name}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true

handler.command = /^(tt|tiktok|tik)$/i

module.exports = handler
