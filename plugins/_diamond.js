let fs = require('fs')
let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
//let thumb = 'https://telegra.ph/file/a75f1fae1fe7232b317d3.jpg'
let ArdXNasBot = `Hai kak ${name}, Aku *NaRaa SHOP* 💕 dsni :D
*Top UP All Game Aman terpercaya*
*Tersedia diamond game Lengkap*
╔ TERSEDIA JUGA
╠ PULSA ALL OPERATOR
╠ TOKEN LISTRIK
╚ VOUCHER GAME dll
❱ *Menerima Lewat Pembayaran* ❰
*DANA - OVO - GOPAY*
Chat Nomor Admin 👇
Wa.me/6288220924312
*_Join Group kami untuk melakukan pembelian_*
https://chat.whatsapp.com/LmqmgVjvHcrBQi5iAMt3Br
`
conn.sendMessage(m.chat, {
        location: { degreesLatitude: undefined, degreesLongitude: undefined, jpegThumbnail: fs.readFileSync('./media/Dm.jpg') },
        caption: ArdXNasBot,
        footer: 'NaRaa Shop',
        buttons: [
          {buttonId: `.dmml`, buttonText: {displayText: '💎DIAMOND ML💎'}, type: "RESPONSE"},
          {buttonId: `.dmff`, buttonText: {displayText: '💎DIAMOND FF💎'}, type: "RESPONSE"}
        ],
        headerType: 'IMAGE'
  })
}
handler.customPrefix = /(Slot|OPM|Stock)/i
handler.command = new RegExp

module.exports = handler
