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

// 保持继承链
function clon(origin) {
  let originProto = Object.getPrototypeOf(origin)
  return Object.assign(Object.create(originProto), origin)
}

// 合并多个对象
const merge = (target, ...sources) => Object.assign(target, ...sources)

// 合并空对象
const merge = (...sources) => Object.assign({}, ...sources)

// 指定默认值
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
}

function processContent(options) {
  let options = Object.assign({}, DEFAULTS, options)
}

// 属性的可枚举性
Object.getOwnPropertyDescriptor
let obj = {foo:123}
Object.getOwnPropertyDescriptor(obj, 'foo')
// {
//   value: 123,
//   wirtable: true,
//   enumerable: true,
//   configurable: true
// }

for...in
Object.keys()
JSON.stringify()
Object.assign()
Reflect.enumerate()

Object.getOwnPropertyDescriptor(Object.prototype, 'otString').enumerable
// false
Object.getOwnPropertyDescriptor([], 'length').enumerable
// false

Object.getOwnPropertyDescriptor(class {foo(){}}.prototype, 'foo').enumerable
// false


// 属性的遍历
for...in
Object.keys(obj)
Object.getOwnPropetyNames(obj)
Object.getOwnPropetyNames()
Object.getOwnPropertySymbols(obj)
Reflect.ownKeys(obj)
Reflect.enumertate(obj)

// __proto__属性
Object.setPrototypeOf()
Object.getPrototypeOf()

__proto__ 属性

// es6
var obj = {
  methods: function() {...}
}
obj.__proto__ = someOtherObj

// es5
var obj = Object.create(someOtherObj)
obj.method = function(){...}
// es5
//  new line

Object.setPrototypeOf(object, prototype)

var o = Object.setPrototypeOf({}, null)

function(obj, proto) {
  Obj.__proto__ = proto
  return obj
}

let proto = {}
let obj = { x: 10 }
Object.setPrototypeOf(obj, protot)

proto.y = 20
proto.z = 40
obj.x // 10
obj.y // 20
obj.z // 40

Object.getPrototypeOf(obj)
function Reactangle() {

}

var rec = new Reactangle()

// ...
let { x, y, ...z} = {x: 1, y: 2, a: 3, b:4}
x // 1
y // 2
z // {a: 3, b: 4}

let obj = {a: {b: 1}}
let {...x} = obj
obj.a.b = 2
x.a.b // 2

// let o1 = {a: 1}
let o2 = {b : 2}
o2.__proto__ = o1
let o3 = {...o2}
o3 // {b: 2}

let z = {a: 3, b: 4}
let n = {...z}
n // {a: 3, b: 4}

// equal Object.assign
let aClone = {...a}

let aClone = Object.assign({}, a)

let ab = {...a, ...b}

let aWithOverrides = {...a, x: 1, y: 2}

let aWithOverrides = {...a, ...{x: 1, y: 2}}

let x = 1, y = 2, aWitchOverrides = {...a, x, y}

let aWitchOverrides = Object.assign({}, a, {x: 1, y: 2})

let aWithDefault = {x: 1, y: 2, ...a}
let aWitchDefault = Objct.assign({}, {x: 1, y: 2}, a)
let aWithDefult = Object.assign({x: 1, y: 2}, a)

// work hard database ...
