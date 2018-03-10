const chai = require('chai')
const {assert, expect, should} = require('chai')
const sinon = require('sinon')
const testsrc = require('./testsrc-sinon')
const dirtyChai = require('dirty-chai')
should()
chai.use(dirtyChai)

let logSpy = sinon.spy()
let pingAddress = 'http://www.google.com'
testsrc.addNumbers(1, 2, logSpy)

describe('Test doubles with Sinon', () => {
  describe('Spies', () => {
    it('should call log() with result of addNumbers exactly once', () => {
      assert(logSpy.called, true)
      logSpy.calledWith(3).should.be.true()
      expect(logSpy.calledOnce).to.equal(true)
    })
  })

  describe('Stubs', () => {
    it('should return true when ping() returns true', () => {
      let pinger = sinon.stub()
      pinger.returns(true)
      let siteIsAlive = testsrc.isAlive(pinger)
      siteIsAlive.should.be.true()
    })

    it('should return true when ping() returns true three times in a row', () => {
      let pinger = sinon.stub()
      pinger.onFirstCall().returns(true)
      pinger.onSecondCall().returns(true)
      pinger.onThirdCall().returns(true)
      let siteIsAlive = testsrc.isAlive(pinger)
      siteIsAlive.should.be.true()
    })

    it('should return false when ping() returns false at least once', () => {
      let pinger = sinon.stub()
      pinger.onFirstCall().returns(true)
      pinger.onSecondCall().returns(true)
      pinger.onThirdCall().returns(false)
      let siteIsAlive = testsrc.isAlive(pinger)
      siteIsAlive.should.be.false()
    })

    it('should return an error when ping() throws an error', () => {
      let pinger = sinon.stub()
      pinger.throws(() => { return new Error() })
      let siteDead = testsrc.isAlive(pinger)
      siteDead.message.should.equal('Error pinging')
    })
  })

  describe('Mocks', () => {
    it('should call api ping() three times', () => {
      let mockApi = sinon.mock(testsrc.api)
      mockApi.expects('ping').exactly(3)
      testsrc.api.isAlive()
      mockApi.verify()
      mockApi.restore()
    })

    it('should call api ping at least once and no more than three times', () => {
      let mockApi = sinon.mock(testsrc.api)
      mockApi.expects('ping').atLeast(1).atMost(3)
      testsrc.api.isAlive()
      mockApi.verify()
      mockApi.restore()
    })

    it('should ping() the server it is passed', () => {
      let mockApi = sinon.mock(testsrc.api)
      mockApi.expects('ping').withExactArgs(pingAddress)
      testsrc.api.ping(pingAddress)
      mockApi.verify()
      mockApi.restore()
    })
  })
})
