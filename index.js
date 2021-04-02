let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
const CFonts = require('cfonts')

CFonts.say('SelfBot LolHuman\nBy Akira', {
    font: 'block',
    align: 'center',
    gradient: ['red', 'magenta']
})

function start(file) {
    let args = [path.join(file), ...process.argv.slice(2)]
    let p = spawn(process.argv[0], args, {
            stdio: ['inherit', 'inherit', 'inherit', 'ipc']
        })
        .on('message', data => {
            console.log('[RECEIVED]', data)
            switch (data) {
                case 'reset':
                    p.kill()
                    start.apply(this, arguments)
                    break
                case 'uptime':
                    p.send(process.uptime())
                    break
            }
        })
        .on('error', e => {
            console.error(e)
            fs.watchFile(args[0], () => {
                start()
                fs.unwatchFile(args[0])
            })
        })
}
start('lol.js')