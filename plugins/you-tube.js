let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

	if (!text) throw `*Link Youtube nya mana kak ${name}?*\n\n*contoh:https://youtu.be/oa04wbLyENo`
	let res = await fetch(`await fetch(`https://saipulanuar.ga/api/download/ytmp4?url=` + text + `&apikey=TcFrwf4v`)
	let json = await res.json()

await m.reply(`*_Sabar ${name} lagi di proses.._*`)
conn.sendMessage(m.chat, {
        video: await(await fetch(json.result.url)).buffer(),
        caption: `\n*Judul video :* ${json.title}\n*dari channel :* ${json.result.channel}\n*publish :* ${json.result.published}\n*jumlah yg nonton😱 : ${json.result.views}\n_${wm}_`,
        footer: 'jangan lupa subrek',
        buttons: [
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
