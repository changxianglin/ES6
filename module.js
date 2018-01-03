import {stat, exists, readFile} form 'fs'

export var firstName = 'Michael'
export var lastName = 'Jackson'
export var year = 1958
//  上面是对外导出三个变量

var firstName = 'Michael'
var lastName = 'Jackson'
var year = 1958

export {firstName, lastName, year}

//  如上两种方式效果一样， 推荐后者

export function mutiply(x, y) {
  return x * y
}

// 导出一个函数 也可到处一个类(class)

function v1() {...}
function v2() {...}

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as stramLatestVersion
}

//  as 重命名 v1 & v2

export var m = 1

var m = 1
export {m}

var n = 1
export {n as m}

export function f() {}

function f() {}
export {f}

//  以上几种情况是可以的，其余错误。


export var foo = 'bar'
setTimeout(() => foo = 'baz', 500)

// es6 箭头函数  输出变量 foo ， 值为 bar ， 500 秒后变成 baz.

//  exprot 全部完结。
