let o = {
  k1: 123, 
  k2: "SLB"
}

o.k1 = "345"

let k1 = 'k1'

o.k3 = "Benfica"

showObjectProperties(o)

o.k2 = undefined
//delete o.k2

showObjectProperties(o)

console.log(o.k2)


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


