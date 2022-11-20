let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

	if (!text) throw `*Link Youtube nya mana kak ${name}?*\n\n*contoh:https://youtu.be/oa04wbLyENo`
	let res = await fetch(`await fetch(`https://nxnapi.herokuapp.com/api/yt/play?judul=xxxtentaction-Everybody%20Dies%20In%20Their%20Nightmares` + text + `&apikey=logasland`)
	let json = await res.json()

conn.sendMessage(m.chat, {
        video: await(await fetch(json.result[0].url)).buffer(),
        caption: `\n*Judul video :* ${json.title}\n*dari channel :* ${json.result.channel}\n*publish :* ${json.result.published}\n*jumlah yg nonton😱 : ${json.result.views}\n_${wm}_`,
        footer: 'jangan lupa subrek',
        buttons: [
          {buttonId: `${json.result[1].audio.url}`, buttonText: {displayText: 'Mp3'}, type: "RESPONSE"},
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
