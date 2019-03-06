
function f1(p) {
  console.log("f1 begin")

  let x = p;

  console.log(x)

  function f2(n) {
    console.log(n + " " + x)
  } 

  console.log("f1 end")
  return f2;
}


var f21 = f1(5);
var f22 = f1("SLB");

f21(1);
f22(2);

f21(3);
f22(4);


