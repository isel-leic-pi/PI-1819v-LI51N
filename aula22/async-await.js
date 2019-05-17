async function foo(promise) {
  if(promise)
    return Promise.resolve(36)
  return 37
}

(async function() {

let res1 = foo(true)

let res2 = foo(false)

setImmediate(() => {
  console.log(res1)
  console.log(res2) 
})

const res3 = [];

for(let i = 0; i < 3; ++i) {
  res3[i] = await foo()
}


const res4 = [];

for(let i = 0; i < 3; ++i) {
  res4[i] = foo()
}

let res5 = await Promise.all(res4)

console.log(res5)
})();





