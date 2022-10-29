let fs = require('fs')
let handler = async(m, { conn }) => {
conn.sendFile(m.chat, fs.readFileSync('./media/AUD-20220912-WA0046.mp3'), '', '', m, true)
}
handler.customPrefix = /(Ara|ara|)/i
handler.command = new RegExp

module.exports = handler
