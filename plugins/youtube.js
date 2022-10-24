let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

	if (!text) throw `*Link Youtube nya mana?*\n\n*contoh:https://youtu.be/oa04wbLyENo`
	let res = await fetch(`https://itztobz.me/api/youtube-mp4?url=` + text)
	let json = await res.json()

conn.sendMessage(m.chat, {
        image: await(await fetch(json.thumbnail)).buffer(),
        caption: `*Title :* ${json.title}\n\n\n_${wm}_`,
        footer: 'click video/audio',
        buttons: [
          {buttonId: `.get ${json.result[0].download}`, buttonText: {displayText: 'VIDEO'}, type: "RESPONSE"},
          {buttonId: `.yta ${text}`, buttonText: {displayText: 'Mp3'}, type: "RESPONSE"},
        ],
        headerType: 'IMAGE'
  }, { quoted: m })
}

handler.help = ['yt'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true
handler.command = /^(yt|ytmp4|ytv)$/i

module.exports = handler
