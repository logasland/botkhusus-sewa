let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

	if (!text) throw '*Link Facebook nya mana?*\n\n*contoh:https://www.facebook.com/reel/1396322624187598?fs=e&s=cl&flite=scwspnss&mibextid=jj4577Dmmt1TazHb'
	let res = await fetch(`https://api-vyvse.herokuapp.com/api/downloader/facebook?apikey=LURKWFujft6rrVR8HyDF&url=` + text)
	let json = await res.json()

conn.sendMessage(m.chat, {
        video: await(await fetch(json.result._360p)).buffer(),
        caption: `*Durasi :* ${json.result.duration}\n*Quality :* 360p\n\n_${wm}_`,
        buttons: [
          {buttonId: `.get ${json.result._720p}`, buttonText: {displayText: '720P'}, type: "RESPONSE"},
        ],
        headerType: 'VIDEO'
  }, { quoted: m })
  }

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true
handler.command = /^(fb|facebook|fbv)$/i

module.exports = handler
