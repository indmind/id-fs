const fs = require('fs')

module.exports = {
    akses: fs.accessSync,
    bacaFile: fs.readSync,
    tulisFile: fs.writeSync,
    ubahNama: fs.renameSync,
    statistik: fs.statSync
}
