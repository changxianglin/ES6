// use ... copy array
// bad
const len = items.length
const itemsCopy = []
let i

for(i = 0; i < len; i++) {
  itemsCopy[i] = item[i]
}

// good
const itemsCopy = [...items]

// Array.from
const foo = document.querySelectorAll('.foo')
const nodes = Array.from(foo)
