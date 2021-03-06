// 闭包

var foo = function(val) {
  var bar = 250
  var baz = function() {
    console.log(250 + val)
  }
  return baz()
}

// 以上是一个典型的闭包，简单的说就是带有数据的函数

 // demo1：
function createFunction() {
  var result = new Array()

  for(var i = 0; i < 10; i++) {
    result[i] = function() {
      return i
    }
  }

  return result
}


// demo2
function createFunction() {
  var result = new Array()

  for(var i = 0; i < 10; i++) {
    result[i] = function(num) {
      return function() {
        return num
      }
    }(i)
  }

  return result
}

// 函数参数按值传递
