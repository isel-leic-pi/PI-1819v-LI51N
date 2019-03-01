
const MAX = 2;

function f1() {
  //console.log(i)  
  // DON'T FORGET TO USE THE LET PREFIX!!!!
  for(let i = 0; i < MAX; ++i) {
      console.log(i)  
      f2()
      console.log(i)  
  }
}

function f2() {
  // DON'T FORGET TO USE THE LET MODIFIER!!!!
  for(let i = 0; i < MAX; ++i) {
    console.log(i)  
  }
}

f1();