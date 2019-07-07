import { firstName, lastName, year } from '.profile'

function setName(element) {
  element.textContent = firstName + '' + lastName
}

// 导入重命名使用 as 关键词
import { lastName as surname } from './profile'

// import 命令具有提升效果，会提升到整个模块的顶部首先执行
foo()
import { foo } from 'my_module'

// 如果一个模块中先输入后输出同一个模块, import 语句可以与 export 语句写在一起
export { es6 as default } from './someModule'
// 等同于
import { es6 } form './someModule'
export default es
