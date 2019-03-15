function add(x, y) {
  return x + y;
}


function addAsync(x, y, cb) {
  cb(x+y)
}

function addSometimesAsync(x, y, cb) {
  let res = x+y;
  if(x%2 == 0)
    return cb(res)
  
  setTimeout(() => cb(res), 1000);
}

console.log("Before add")
let res = add(1,2);
console.log("After add")
processRes(res)



console.log("Before addAsync")
addAsync(3,4, processRes)
console.log("After addAsync")


console.log("Before addSometimesAsync")
addSometimesAsync(5,6, processRes)
console.log("After addSometimesAsync")

console.log("Before addSometimesAsync")
addSometimesAsync(8,7, processRes)
console.log("After addSometimesAsync")

console.log(`Before I leave I'm going to burn some trees!`)

for(let i = 0; i < 10000000000; ++i);

console.log(`I'm done!`)

function processRes(res) {
  console.log(`In processRes with result ${res}`)
}





