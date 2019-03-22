

let o = {
  p1 : 123,
  p2: true,
  p3: { 
    p11: "Portugal",
    p12: [1,2,3]
  },  
  m: "console.log('slb');"
}


let jsonStr = JSON.stringify(o)

let o1 = JSON.parse(jsonStr)
console.log(o1)

o1.m1 = new Function(o1.m)

o1.m1()