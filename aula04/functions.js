

function f1() {

}

let v2 = function f2(p) {
  console.log(p)
  if(p%2 == 0)
    f2(p+1)
}

console.log(v2.name)


var v3 = function() {

}

console.log(`f1: ${f1.name}` )
console.log(`f2: ${v2.name}` )
console.log(`anonymous: ${v3.name}`)


f1()

let v4 = v2;

v4(1);
v4(2);

console.log("-----------------------------")
v2 = null;

v4(1);
v4(2);




