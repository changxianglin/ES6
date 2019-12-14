var foo = 'bar'
var baz = {foo}
baz // {foo: "bar"}

var baz = {foo: foo}

// other

function f(x, y) {
  return {x, y}
}

function f(x, y) {
  return {x: x, y: y}
}

var o = {
  method() {
    return 'Hello!'
  }
}

var o = {
  method: function() {
    return 'Hello!'
  }
}

var Person = {
  name: '张三',
  brith,
  hello() {console.log('我的名字是,', this.name)}
}

function getPoint() {
  var x = 1
  var y = 10
  return { x, y }
}
getPoint() // {x:1, y:10}


var ms = {}

funtion getItem(key) {
  return key in ms ? ms[key]: null
}

function setItem(key, value) {
  ms[key] = value
}

function clear() {
  ms = {}
}

module.exports = { getItem, setItem, clear } //等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear,
}

var cart = {
  _wheels: 4,
  get wheels() {
    return this._wheels;
  },
  set wheels() {
    if(value < this._wheels) {
      throw new Error('数值太小了！')
    }
    this._wheels = value
  }
}

var obj = {
  class() {}
} //等同于

var obj = {
  'class': function() {}
}

var obj = {
  * m() {
    yield 'hello world'
  }
}
