let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Link tiktok nya mana?*\n\n*contoh:* \n_${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/_`
	let res = await fetch(`https://itztobz.me/api/tiktok?url=` + text)
	let json = await res.json()

conn.sendMessage(m.chat, {
        video: await(await fetch(json.result.no_watermark)).buffer(),
        caption: `*Link:* ${json.result.no_watermark}`,
        buttons: [
          {buttonId: `.get ${json.result.watermark}`, buttonText: {displayText: 'WATERMARK'}, type: "RESPONSE"},
        ],
        headerType: 'VIDEO'
  }, { quoted: m })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true

handler.command = /^(tt|tiktok|tik)$/i

module.exports = handler


