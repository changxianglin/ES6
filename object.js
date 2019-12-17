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
obj[key1].name // '[description]'
obj[key2].name // ""

// Object.is()

Object.is('foo', 'foo') // true
Object.is({}, {}) // false
+0 === -0 // true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

// es5
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y
    }
    //针对 NaN 的情况
    return x !== x && y !== y
  }
  configurable: true,
  enumerable: false,
  writable: true
})

// Object.assign()
var target = {a:1}
var source1 = {b:2}
var source2 = {c:3}

Object.assign(target, source1, source2)
target // {a:1,b:2,c:3}

var target = {a:1, b:1}

var source1 = {b:2, c:2}
var cource2 = {c:3}

Object.assign(target, source1, source2)
target // {a:1,b:2,c:3}

Object.assign({b:'c'}, Object.defineProperty({}, 'invisible'， {
  enumerable: false,
  value: 'hello'
})
)
// { b: 'c'}

Object.assign({a: 'b'}, {[Symbol('c')]: 'd'})
// {a: 'b', Symbol(c): 'd'}

var target = {a: {b: 'c', d: 'e'}}
var source = {a: {b:'hello'}}
Object.assign(target, source) // {a: {b: 'hello'}}


Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]

class Point {
  constructor(x, y) {
    Object.assign(this, {x, y})
  }
}

Object.assign(SomeCalss.prototype, {
  someMethod(arg1, arg2) {
    ...
  }
  anotherMethod() {
    ...
  }
})
// 等同于
SomeClass.prototype.someMethod = function(arg1, arg2) {
  ...
}
SomeCalss.prototype.anotherMethod = function() {
  ...
}

// 克隆对象
function clone(origin) {
  return Object.assign({}, origin)
}
