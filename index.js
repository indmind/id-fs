const fs = require('fs')

module.exports = {
    akses: fs.accessSync,
    bacaFile: fs.readFileSync,
    tulisFile: fs.writeFileSync,
    ubahNama: fs.renameSync,
    statistik: fs.statSync
}
