module.exports = {
  sayHello () { return 'Hello' },
  addNumbers (value1, value2, log) {
    let res = value1 + value2
    log(res)
    return res
  },
  isAlive (ping) {
    let ping1, ping2, ping3
    // Hipotetically ping() returns true if websites is accessible
    // or false otherwise
    try {
      ping1 = ping()
      ping2 = ping()
      ping3 = ping()
    } catch (error) {
      return new Error('Error pinging')
    }
    if (ping1 && ping2 && ping3) return true
    else return false
  },
  asyncTimeout () {
    return new Promise(resolve => setTimeout(() => resolve('Hello, World!'), 1000))
  },
  api: {
    isAlive () {
      let ping1, ping2, ping3
      // Hipotetically ping() returns true if websites is accessible
      // or false otherwise
      try {
        ping1 = this.ping()
        ping2 = this.ping()
        ping3 = this.ping()
      } catch (error) {
        return new Error('Error pinging')
      }
      if (ping1 && ping2 && ping3) return true
      else return false
    },
    ping (address) {
      return true
    },
    killServer () {

    }
  }
}
