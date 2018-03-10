module.exports = {
  sayHello () { return 'Hello' },
  addNumbers (value1, value2) {
    return value1 + value2
  },
  reverseWords (arr) {
    const arrLen = arr.length
    let res = []
    for (let i = 0; i < arrLen; i++) {
      let reverseWord = arr[i].split('').reverse().join('')
      res.push(reverseWord)
    }
    return res
  },
  customTimeout (ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('done'), ms)
    })
  },
  async asyncTimeout () {
    let res = await this.customTimeout(1000)
    return res
  }
}
