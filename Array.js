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
  // 
}
