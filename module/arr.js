// bad
function processInput(input) {
  return [left, right, top, bottom]
}

// good
function processInput(input) {
  return {left, right, top, bottom}
}

const { left, right } = processInput(input)
