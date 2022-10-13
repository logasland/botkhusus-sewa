let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Link Youtube nya mana?*\n\n*contoh:https://youtu.be/oa04wbLyENo`
	let res = await fetch(`https://itztobz.me/api/youtube-mp4?url=` + text )
	let json = await res.json()
let Naon = `*Title :* ${json.title}\n\n_${wm}_
`
conn.sendMessage(m.chat, {
        image: await(await fetch(json.thumbnail)).buffer(),
        caption: Naon,
        buttons: [
          {buttonId: `.get ${json.result[0].download}`, buttonText: {displayText: `${json.result[0].quality} (${json.result[0].filesizeMB})`}, type: "RESPONSE"},
          {buttonId: `.get ${json.result[1].download}`, buttonText: {displayText: `${json.result[1].quality} (${json.result[1].filesizeMB})`}, type: "RESPONSE"},
          {buttonId: `.get ${json.result[2].download}`, buttonText: {displayText: `${json.result[2].quality} (${json.result[2].filesizeMB})`}, type: "RESPONSE"},
          {buttonId: `.get ${json.result[3].download}`, buttonText: {displayText: `${json.result[3].quality} (${json.result[3].filesizeMB})`}, type: "RESPONSE"}
        ],
        headerType: 'IMAGE'
  }, { quoted: m })
}
handler.help = ['youtube'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true

handler.command = /^(youtube|ytmp4|yt)$/i

module.exports = handler
