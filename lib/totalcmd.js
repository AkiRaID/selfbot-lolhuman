const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))

/**
 * for add total command
 * Subscribe Akira
 * Gk Subscribe Gk Temen
**/
const cmdadd = () => {
	ceemde[0].totalcmd += 1
	fs.writeFileSync('./database/bot/totalcmd.json', JSON.stringify(ceemde))
}

module.exports = {
	cmdadd
}