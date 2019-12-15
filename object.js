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

// 属性名表达式
obj.foo = true
obj['a' + 'bc'] = 123

// 字面量 es5
var obj = {
  foo: true,
  abc: 123
}

// 字面量 es6
let propKey = 'foo'
var obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
}

// 另外一个例子
var lastWrod = 'last word'
var a = {
  'first word': 'hello',
  [lastWord]: 'world'
}

a['first world'] // 'hello'
a[lastWrod] // 'world'
a['last word'] // world

//
let obj = {
  ['h' + 'ello']() {
    return 'hi'
  }
}

obj.hello() // hi

// 下列例子报错
var foo = 'bar'
var bar = 'abc'
var baz = {[foo]}

// 下列例子正确
var foo = 'bar'
var baz = {[foo]: 'abc'}

var person = {
  sayName: function() {
    console.log(this.name)
  },
  get firstName() {
    return 'Nicholas'
  }
}

person.sayName.name // sayName
person.firstName.name // get firstName

(new Function()).name // anonymous

var doSomething = function() {

}

doSomething.bind().name // 'bound doSomething'

const key1 = Symbol('description')
const key2 = Symbol()

let obj = {
  [key1](){},
  [key2](){},
}
obj[key1].name
obj[key2].name
