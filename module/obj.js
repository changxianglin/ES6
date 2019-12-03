// bad
const a = {k1: v1, k2: v2,}
const b = {
  k1: v1,
  k2: v2
}

// good
const a = {k1: v1, k2: v2}
const b = {
  k1: v1,
  k2: v2,
}

// Object add new attributes user Object.assign
// bad
const a = {}
a.x = 3

// if reshape unaviodable
const a = {}
Object.assign(a, {x: 3})

// good
const a = {x: null}
a.x = 3

// object attibutes is dynamic
// bad
const obj = {
  id: 5,
  name: 'San Francisio',
}
obj[getKey('enabled')] = true

// good
const obj = {
  id: 5,
  name: 'San Francisio',
  [getKey('enabled')]: true,
}

// should concise wirte
var ref = 'some value'

// bad
const atom = {
  ref: ref,
  value: 1,
  addValue: function(value) {
    return atom.value + value
  },
}

// good
const atom = {
  ref,
  value: 1,
  addValue(value) {
    return atom.value + value
  },
}
