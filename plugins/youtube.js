let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Link Youtube nya mana?*\n\n*contoh:https://youtu.be/oa04wbLyENo`
	let res = await fetch(`https://itztobz.me/api/youtube-mp4?url=` + text )
	let json = await res.json()

conn.sendFile(m.chat, json.result[0].download, 'fb.mp4', `*Title : ${json.title}*\n\n_${wm}_`, m)
}
handler.help = ['yt'].map(v => v + ' <url>')

handler.tags = ['downloader']

handler.limit = true
handler.group = true

handler.command = /^(yt|ytmp4|ytv)$/i
