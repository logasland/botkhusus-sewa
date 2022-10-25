let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

	if (!text) throw `*Link Youtube nya mana?*\n\n*contoh:https://youtu.be/oa04wbLyENo`
	let res = await fetch(`https://itztobz.me/api/youtube-mp3?url=` + text)
	let json = await res.json()

await m.reply('_*sabar banh lagi diprosses klo gagal ra peduli :v...*_')
conn.sendFile(m.chat, json.result[0].download, 'fb.mp4', author, m)
}

handler.help = ['ytmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true
handler.command = /^(ytmp3|ytsound|yta|yts)$/i

module.exports = handler
