const express = require("express");

const app = express();

app.use(measureRequestTime)

app.get('*', function (req, rsp, next) {
  console.log("function called in every get")
  next()

})

app.get('/', function (req, rsp, next) {
  setTimeout(() => rsp.send("****GET to / called***"), 5000)
  next()
},
  function (req, rsp) {
    console.log("middleware after /")
  }
)

const PORT = 3000

app.listen(PORT, function (e) {
  if (e) {
    return console.log(e)
  }
  console.log(`server listening on port ${PORT}`)
});


/////// Auxiliary functions

function measureRequestTime(req, rsp, next) {
  const start = Date.now();
  
  rsp.on('finish', logRequestTime)

  function logRequestTime() {
    const requestTime = Date.now() - start;
    console.log(`Request took ${requestTime} ms`)
  }

  //const sendOrig = rsp.send;
  // rsp.send = function(...args) {
  //   sendOrig.apply(this, args);
  //   const requestTime = Date.now() - start;
  //   console.log(`Request took ${requestTime} ms`)
  // }

  next();
  
}


