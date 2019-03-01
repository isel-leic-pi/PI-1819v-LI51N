let a = [
  1, 
  "abc", 
  function() { },
  ,
  { a : function() {} }, 
  [], 
  true
]

console.log(a.length)

a[1000] = 10;

console.log(a.length)

console.log(a[0])
//a.length = 0

console.log(a.length)
console.log(a[0])


console.log("###" + a[0])

a.k1 = undefined
a.m1 = function() { }

a['1050'] = 123

console.log(a.length)

showObjectProperties(a)

function showObjectProperties(o) {
  console.log("----------------------")
  // for(let k in o) {
  //   console.log(k + " = " + o[k])
  // }
  let keys = Object.keys(o)
  for(let i = 0; i < keys.length; ++i) {
    let k = keys[i]
    console.log(k + " = " + o[k])
  }

}





