const chai = require('chai')
const { expect, should } = require('chai')
const testsrc = require('./testsrc-chai')
const chaiAsPromised = require('chai-as-promised')
const dirtyChai = require('dirty-chai')

chai.use(chaiAsPromised)
should()
chai.use(dirtyChai)

describe('Promises', () => {
  describe('customTimeout()', () => {
    it('should be a promise', () => {
      return expect(testsrc.customTimeout(1)).to.be.a('promise')
    })

    it('should resolve after given time', () => {
      return expect(testsrc.customTimeout(1000)).to.eventually.be.fulfilled()
    })

    it('should resolve with value of "done"', () => {
      return expect(testsrc.customTimeout(999)).to.eventually.equal('done')
    })
  })
})

describe('Async/Await', () => {
  it('Mocha should work well with async/await', async () => {
    let eventually42 = await Promise.resolve(42);
    (eventually42).should.equal(42)
    await Promise.reject(new Error()).should.be.rejectedWith(Error)
  })
})

describe('Async function', () => {
  describe('asyncTimeout()', () => {
    it('should be fulfilled returning a string with returning a string with value of "done"', async () => {
      await testsrc.asyncTimeout().should.be.fulfilled
      const res = await testsrc.asyncTimeout()
      expect(res).to.be.a('string')
      res.should.equal('done')
    })
  })
})
