const main = () => {
  // 变量的结构赋值
  // 模式匹配 let  [a, b, c] = [1, 2, 3]
  // 如果解构不成功，变量的值就等于 undefined
  // 不完全解构，等于左边的模式，只匹配一部分等号右边的数组， 依然是成功。
  // 等号右边的不是数组，（或者说，不可遍历）会报错
  // Set 结构，也可以使用数组的解构赋值 let [x, y, z] = new Set(['a',])
  // 默认值
  // let [foo = true] = []
  // es6 内部使用严格相等运算符, 所以 当一个数组成员严格等于 undefined, 才可行
  // 对象的解构赋值
  // let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
  // 字符串的解构赋值
  // const [a, b, c, d, e] = 'hello'
  // 数值和布尔值的解构赋值
  // 函数参数的解构赋值
  // function add([x, y]) {
  //  return x +ｙ
  // }
  // add([1, 2])
  // 圆括号问题: 不要在模式在放置圆括号
  // 用途
  // 交互变量的值
  // let x = 1
  // let y = 2
  // [x, y] = [y, x]
  // 函数返回多个值
  // function example() {
  //  return [1, 2, 3]
  // }
  // let [a, b, c] = example()
  // 函数参数的默认值
  // 遍历 Map 结构
  // 输入模块的指定方法

  // 字符串的扩展
  // 字符串的 Unicode 表示法
  // codePointAt()
  // String.fromCodePoin()
  // 字符串的遍历器接口
  // for...of
  // at
  // normalize()
  // includes(), startsWith(), endsWith()
  // repeat()
  // padStart(),padEnd()
  // matchAll()
  // 模板字符串, ${}
  // String.raw()

  // 正则的扩展

  // RegExp 构造函数
  // 字符串的正则方法
  // match(), replace(),search(),split()
  // u 修饰符
  // 1.点字符
  // 2.Unicode 字符表示法
  // 量词
  // 预定义模式
  // i 修饰符
  // y 修饰符 (粘连修饰符)
  // sticky 属性
  // flags 属性
  // s 修饰符：dotAll模式 ()
  // 后行断言
  // Unicode 属性类

  // 数值扩展
  // 二进制和八进制
  // Number.isFinite(), Number.isNaN()
  // Number.parseInt(), Number.parseFloat()
  // Number.isInterger()
  // Number.EPSILON
  // 安全整数和 Number.isSafeInteger()

  // Math 对象的扩展
  // Math.truns() (用于去除一个数的小数部分，返回整数部分，无法截取返回NaN)
  // Math.sign() (用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。)
  // Math.cbrt() (用于计算一个数的立方根)
  // Math.clz32()
  // Math.imul()
  // Math.expm1()
  // Math.log1p()
  // 指数运算符

  // 函数的扩展

  // 函数的参数默认值
  // ES6 之前， 不能直接设置参数的默认值，只能采用变通的方法
  //  function log(x, y) {
  //    y = y || 'World'
  //    console.log(x, y)
  // }
  // 缺点在于先判断一个参数 y 被赋值
  // if(typeof y === 'undefined') { y = 'World'}
  // ES6 允许为函数的参数设置默认值， 即直接写在参数定义的后面
  // function log(x, y = 'World') {
  // console.log(x, y)
  // }
  // 参数变量是默认声明的，所以不能用 let 或 const 再次声明(会报错)
  // 参数使用默认值时，函数不能有同名参数
  // 默认参数惰性求值, 每次都会重新计算默认的值
  // 与解构赋值默认值结合使用
  //  function foo({x, y = 5} = {}) {
  //  console.log(x, y)
  // }
  //  function fetch(url, {body = '', method = 'GET', headers = {}} = {}) {
  //  console.log(method)
  // }
  // 参数默认值的位置
  // 通常情况下，定义了默认值的参数， 应该是函数的尾参数，因为这样比较容易看出来，
  // 到底省略了哪些参数,如果非尾部的参数设置默认值， 实际上这个参数没法省略的。
  // 函数的 length 属性
  // rest 参数
  // 严格模式
  // name 属性
  // 箭头函数
  // 双冒号运算
  // 尾调优化
  // 函数参数的尾逗号
}
