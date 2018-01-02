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
