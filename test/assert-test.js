const { assert } = require('chai')
const testsrc = require('./testsrc-chai')

const wordsToReverse = ['god', 'star', 'time', 'lived', 'raw', 'desserts']
// Results
const sayHelloRes = testsrc.sayHello()
const addNumbersRes = testsrc.addNumbers(3, 4)
const reverseWordRes = testsrc.reverseWords(wordsToReverse)

describe('Assert Testing', () => {
  describe('sayHello()', () => {
    it('sayHello() should return hello', () => {
      assert.equal(sayHelloRes, 'Hello')
    })
  })

  describe('addNumbers()', () => {
    it('addNumbers() should return a number', () => {
      assert.typeOf(addNumbersRes, 'number')
    })

    it('addNumbers() should be above 5', () => {
      assert.isAbove(addNumbersRes, 5)
    })
  })

  describe('reverseWords()', () => {
    it('should return an array with the same length as the original', () => {
      assert.typeOf(reverseWordRes, 'array')
      assert.lengthOf(reverseWordRes, 6)
    })

    it('should return the strings reversed', () => {
      assert.equal(reverseWordRes[0], 'dog')
    })
  })
})
