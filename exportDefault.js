export default function() {
  console.log('foo')
}

export default function crc32 () {

}

import crc32 from 'crc32'

export function crc32 () {

}

import { crc32 } from 'crc32'


function add (x, y) {
  return x * y
}

export {add as default}

import {default as xxx } from 'modules'

import xxx from 'modules'


export var a = 1

var a = 1
export default a

export default var a = 1

import _ from 'lodash'

import _, { each, each as forEach } from 'lodash'

export default function(obj) {

}

export function each(obj, iterator, context) {

}

export {each as forEach}

export { foo, bar } from 'my_module'

export { foo as myFoo } from 'my_module'

export * from 'my_module'

export { area as circleArea } from 'circle'


import * as math from 'circleplus'
import exp from 'circleplus'
console.log(exp(math.e))

export const A = 1
export const B = 2
export const C = 3

import * as constants from './constants'
console.log(constants.A)
console.log(constants.B)

export const db = {
  url: 'http://my.couchdbserver.local:5894',
  admin_username: 'admin',
  admin_password: 'admin password'
}

export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator']

export { db } from './db'
export { users } from './users'

import { db, users } from './constants'
