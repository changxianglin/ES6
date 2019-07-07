1. 模块的整体加载
模块的整体加载，用星号(*) 指定一个对象，所有输出值都加载在这个对象上。

export function area(radius) {
  return Math.PI * radius * radius
}

export function cirumference(radius) {
  return 2 * Math.PI * radiu
}

// 在另一个文件中加载，为方便学习写在一个文件中
import { area, cirumference} from './circle'

console.log('圆面积: ' + area(4))
console.log('圆周长: ' + cirumference(14))

// 上面的写法是逐一加载的方法，整体加载方法如下
import  * as circle from './circle'

console.log('圆面积: ' + circle.area(4))
console.log('圆周长: ' + circle.cirumference(14))

// module 命令可以取代 imort 语句，达到整体输入模块的作用
module circle from './circle'
console.log('圆面积: ' + circle.crear(4))
console.log('圆周长: ' + circle.cirumference(14))

// export default 命令，为指定模块默认输出.
export default function() {
  console.log('foo')
}
// 在其他模块加载改模块时，import 命令可以为该匿名函数指定任意名字
import customeName from './export-default'
customeName()

// export default 在非匿名函数前也是可以用的
export default function foo() {
  console.log('foo')
}
// 或者写成
function foo() {
  console.log('foo')
}

export default foo

// 输出
export default function crc32() {
  // todo
}
// 输入
import crc32 from 'crc32'

// 输出
export function crc32() {
  // TODO:
}

// 输入
import { crc32 } from 'crc32'

// 总结： 输出使用 export default 输入不用大括号,不使用则需要.
// 一个模块只能使用一次 export default

// 本质上，export default 就是输出一个叫做 default 的变量或方法，然后系统
// 允许你为他取任意名字，所以，下面这些写法是有效的。

function add(x,y) {
  return x * y
}

export { add as default }


import { default as xxx } from 'modules'

// 如果想在一条 import 语句中同时使用输入默认方法和其他变量，可以写成下面这样
import customeName, { otherMethod } from './export-default'
