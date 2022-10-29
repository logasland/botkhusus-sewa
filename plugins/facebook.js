let { facebookDl } = require('../lib/scraper.js')
let { savefrom } = require('@bochilteam/scraper')
let handler = async (m, { conn, text, usedPrefix, command }) => {

	if (!text) throw '*Link Facebook nya mana?*\n\n*contoh:https://www.facebook.com/groups/BuHeMaKi/permalink/2661876587433913/?app=fbl'
	let res = await facebookDl(text).catch(async _ => await savefrom(text)).catch(_ => null)
	if (!res) throw 'Can\'t download the post'
	let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
	await m.reply('_In progress, please tungguan..._')
	conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '' }, { quoted: m })
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.group = true
handler.command = /^(fb|facebook|fbv)$/i

module.exports = handler
