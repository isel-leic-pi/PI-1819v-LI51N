Object.prototype.slb = "SLB"


let s = "SLB"

String.prototype.surround = function(str) {
  return `${str} ${this} ${str}`
}

let s1 = s.surround("Glorioso") // Glorioso SLB Glorioso

console.log(s1)


console.log(s1.slb)
console.log([].slb)
console.log((function(){}).slb)

