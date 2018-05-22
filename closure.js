// 闭包

var foo = function(val) {
  var bar = 250
  var baz = function() {
    console.log(250 + val)
  }
  return baz()
}

// 以上是一个典型的闭包，简单的说就是带有数据的函数
