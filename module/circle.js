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
