var counter = 3
function incCounter() {
  counter++
}

module.exports = {
  counter: cotuner,
  incCounter: incCounter
}

//

var counter = require('./lib').counter
var incCounter = require('./lib').incCounter

console.log(counter)
incCounter()
console.log(counter)

// ES6 是引用模块机制，CommonJS 是复制
