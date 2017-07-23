const
    _r = require,
    path = _r('path'),
    fs = _r('fs')

const 
    _print = a => process.stdout.write(a + ""),
    _display = (a, c) => { _print(a.startsWith('*') ? fs.readFileSync(path.join(__dirname, './display/', a.substring(1))) : a); if (c) process.exit(c) },
    _catch = (i, a, c) => { if (i) _display(a, c) }

module.exports = { _print, _display, _catch }