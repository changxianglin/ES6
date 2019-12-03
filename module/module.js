// bad
const moduleA = require('moduleA')
const func1 = moduleA.func1
const func2 = moduleA.func2

// good
import { func1, func2 } from 'moduleA'

// CommonJS
var React = require('react')

var Breadcrumbs = React.createClass({
  render() {
    return <nav />
  }
})

module.exports = Breadcrumbs

// es6
import React from 'react'

const Breadcrumbs = React.createCalss({
  render() {
    return <nav />
  }
})

export default Breadcrumbs

// bad
import * as myObject './importModule'

// good
import myObject from './importModule'

// function export default name firstLetter should lowercase
function makeStyleGuide() {

}

export default makeStyleGuide

// Object export default name firstLetter should uppercase
