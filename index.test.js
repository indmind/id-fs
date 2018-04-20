const idfs = require('./index')
const fs = require('fs')

describe('main test', () => {
  it('should return an object', () => {
    expect(typeof idfs).toBe('object')
  })

  it('should have correct function', () => {
    expect(JSON.stringify(idfs.akses)).toEqual(JSON.stringify(fs.accessSync))
    expect(JSON.stringify(idfs.bacaFile)).toEqual(JSON.stringify(fs.readFileSync))
    expect(JSON.stringify(idfs.tulisFile)).toEqual(JSON.stringify(fs.writeFileSync))
    expect(JSON.stringify(idfs.ubahNama)).toEqual(JSON.stringify(fs.renameSync))
    expect(JSON.stringify(idfs.statistik)).toEqual(JSON.stringify(fs.stat))
  })
})
