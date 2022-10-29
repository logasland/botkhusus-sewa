let fs = require('fs')
let handler = async(m, { conn }) => {
conn.sendFile(m.chat, fs.readFileSync('./media/Ara ara.opus'), '', '', m, true)
}
handler.customPrefix = /(Ara|ara|)/i
handler.command = new RegExp

module.exports = handler
