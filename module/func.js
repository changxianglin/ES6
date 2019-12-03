(()=> {
  console.log('Welcome to the Internet.')
})()

// bad
[1, 2, 3].map(function(x) {
  return x * x
})

// good
[1, 2, 3].map((x) => {
  return x * x
})
// arrow function instead Function.prototype.bind

// bad
const self = this
const boundMethos = function(...params) {
  return method.apply(self, params)
}

// acceptable
const boundMethod = method.bind(this)

// best
const boundMethod = (...params) => method.apply(this,params)

// bad
function divide(a, b, option = false) {

}

// good
function divide(a, b, {option = false} = {

}) {}

// bad
function concatenateAll() {
  const args = Arra.prototype.slice.call(arguments)
  return args.join('')
}

// good
function concatenateAll(...args) {
  return args.join('')
}

// bad
function handleThings(opts) {
  opts = opts || {}
}

// good
function handleThings(opts = {}) {
  //
}
