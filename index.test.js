const idfs = require('./index')
const fs = require('fs')

describe('main test', () => {
  it('should return an object', () => {
    expect(typeof idfs).toBe('object')
  })

  it('should have correct function', () => {
    expect(idfs.akses).toEqual(fs.accessSync)
    expect(idfs.bacaFile).toEqual(fs.readFileSync)
    expect(idfs.tulisFile).toEqual(fs.writeFileSync)
    expect(idfs.ubahNama).toEqual(fs.renameSync)
    expect(idfs.statistik).toEqual(fs.statSync)
  })
})
