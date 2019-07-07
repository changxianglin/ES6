1.导出变量

// 第一种导出
export var firsName = 'Michael'
export var lastName = 'Jackson'
export var year = 1958

// 第二种导出
var firstName = 'Michael'
var lastName = 'Jackson'
var year = 1958

export { firsName, lastName, year }

2.导出函数

export function multiply(x, y) {
  return x * y
}

// 使用 as 关键字重命名

function v1() {...}
function v2() {...}

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLastestVersion // v2 使用不同的名字导出两次
}

// export 和 import 不可处于函数作用内
function foo() {
  export default 'bar' // SyntaxError
}

foo()
