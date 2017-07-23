// this code is really bad, don't even try
let
    { version } = require('./package'),
    mutex = process.argv.slice(2).join(" "),
    { _print, _display, _catch } = require('./_display')

if(mutex.trim() == "") mutex = "x"

_catch(mutex == "--help", '*usage', 1)

_catch(mutex == "--version", version, 1)

const stdin = process.stdin;
try { stdin.setRawMode(true); } catch (e) { }

stdin.resume();

stdin.setEncoding('utf8');
let keys = "";
let cbo = 0;
let isO = false;
let _chunk = true;

// use for things accessable inside eval
var code = a => parseInt(a);
var str = a => a + "";

var _BUILDBUF = [];

stdin.on('data', k => {
    for (let key of k)
        try {
            if (key === '\u0003')
                return done();
            var x = key; // use for things accessable inside eval
            var clear = () => _BUILDBUF = [];
            var buffer = (cmp, a) => {
                if(typeof(x) !== "undefined") 
                _BUILDBUF.push(x);
                if(cmp(_BUILDBUF)) {
                    let resp = a(_BUILDBUF);
                    _BUILDBUF = [];
                    if(resp)
                        return resp;
                    else return "";
                }
                return "";
            }
            let _pr = eval(mutex) + "";
            if(_chunk) process.stdout.write(_pr + "");
            keys += key;
        } catch (e) {
            process.stderr.write(e + "");
            process.exit(-1);
        }
});
function done() {
    let x = keys;
    if(!_chunk)
        process.stdout.write(eval(mutex) + "");
    process.exit(0);
}