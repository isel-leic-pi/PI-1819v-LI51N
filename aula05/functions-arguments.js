'use strict'

function f(x, y) {
  console.log(`x=${x} - y=${y}`)
  for(let i = 0; i < arguments.length; ++i) {
    console.log(`arguments[${i}] = ${arguments[i]}`)
  }
}

f()
f(1)
f(1,2)
f(1,2,3)