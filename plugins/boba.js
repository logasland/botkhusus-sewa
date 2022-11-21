let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Link Youtube nya mana kak ?*\n\n*contoh:https://youtu.be/oa04wbLyENo`
	let res = await fetch(`https://saipulanuar.ga/api/download/ytmp4?url=` + text + `&apikey=TcFrwf4v`)
	let json = await res.json()

conn.sendFile(m.chat, json.result.url, 'fb.mp4', `dah jadi nich!!!\nceban aja `, m)
}

handler.help = ['yt'].map(v => v + '<url>')
handler.tags = ['main']
handler.limit = true
handler.command = /^(yt|ytmp|ytv)$/i

module.exports = handler
