function sum() {
  let COUNT = 200000000;
  let res = 0;
  for(let i= 0; i < COUNT; ++i) {
    for(let j= 0; j < arguments.length; ++j) {
      res += arguments[j];
    }
  }
  return res;
}

function profile(f){
  return function() {
    let args = [];
    for(let i = 0; i < arguments.length; ++i) {
      args[i] = arguments[i];
    }

    let start = Date.now();
    let res = f.apply(this, args)
    let end = Date.now();
    
    console.log(`call took ${end-start}ms`)

    return res;
  } 
}


let fprofiled = profile(sum);

console.log(fprofiled(1,2,3,4,5,6))