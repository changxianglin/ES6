var hanleer = {
  id: '123456',

  init: function() {
    document.addEventListener('click', event => this.doSomething(event.type), false)
  },

  doSomething: function(type) {
    console.log('Handling ' + type + ' for ' + this.id)
  }
}


// init 方法中使用了箭头函数， 这导致箭头函数里面的 this 总是指向 handler。
// 箭头函数内没有自己的 this, 导致内部的 this 就是外层代码的 this, 由于它没有 this , 所以不能作构造函数
