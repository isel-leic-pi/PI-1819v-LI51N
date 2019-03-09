Array.prototype.take = function(n) {
  return this.slice(0, n)
}



// Array.prototype.flatMap = Array.prototype.flatMap || function(mapper) {
//   let res = []
//   this.forEach(e => res = res.concat(mapper(e)))

//   return res;
// }

Array.prototype.flatMap = function(mapper) {
  return this.reduce((acc, e) => acc.concat(mapper(e)), [])
}

Array.generate = function(n) {
  let res = [];
  for(let i = 0; i < n; ++i) {
    res[i] = i;
  }
  return res;
}


let a = ["Sport", "Lisboa", "e", "Benfica"]

a.forEach(console.log)

let lenStrsEven = a
  .map(s => s.length)
  .filter(n => n % 2 != 0)
  //.take(2)

console.log(lenStrsEven);

a.push("1904") // a[a.length] = "1904"

let last = a.pop() // let last = a[a.length-1]; --a.length;


console.log([1,2,3].map(Array.generate))
console.log([1,2,3].flatMap(Array.generate))

console.log([1,2,3].flatMap(e => e))



