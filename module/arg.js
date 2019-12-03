// bad
function getFullName(user) {
  const firstName = user.firstName
  const lastName = user.lastName
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj
}

// best
function getFullName({ firstName, lastName }) {}
