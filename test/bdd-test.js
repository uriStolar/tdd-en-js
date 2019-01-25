const chai = require('chai')
const {expect, should} = require('chai')
const testsrc = require('./testsrc-chai')
const dirtyChai = require('dirty-chai')
should()
chai.use(dirtyChai)

const wordsToReverse = ['god', 'star', 'time', 'lived', 'raw', 'desserts']
// Results
const sayHelloRes = testsrc.sayHello()
const addNumbersRes = testsrc.addNumbers(4, 4)
const reverseWordRes = testsrc.reverseWords(wordsToReverse)

describe('Expect & Should (BDD Style)', () => {
  describe('sayHello()', () => {
    it('should return the string \'hello\'', () => {
      expect(sayHelloRes).to.be.a('string')
      sayHelloRes.should.equal('Hello')
    })
  })

  describe('addNumbers()', () => {
    it('should return a number greater than 5', () => {
      expect(addNumbersRes).to.be.a('number')
      addNumbersRes.should.be.above(5)
    })
  })

  describe('reverseWords()', () => {
    it('should return an array with same length as the original', () => {
      reverseWordRes.should.be.an('array').and.have.lengthOf(6)
    })

    it('should return the strings reversed', () => {
      expect(reverseWordRes[0]).to.equal('dog')
      expect(reverseWordRes[5]).to.equal('stressed')
    })
  })
})
