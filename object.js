var foo = 'bar'
var baz = {foo}
baz // {foo: "bar"}

var baz = {foo: foo}

// other

function f(x, y) {
  return {x, y}
}

function f(x, y) {
  return {x: x, y: y}
}
