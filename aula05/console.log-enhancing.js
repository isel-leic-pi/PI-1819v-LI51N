'use strict'

let ERROR = 1
let WARNING = 2
let INFO = 3;

(function () {  
  let oldConsoleLog = console.log;
  console.log = function(logLevel, ...args) {
    if(this.LogLevel >= logLevel) {
      return oldConsoleLog.apply(this, args)
    }
  }
})()


console.LogLevel = WARNING

console.log(ERROR, "Error message")
console.log(WARNING, "Warning message")
console.log(INFO, "Info message")

console.LogLevel = INFO
console.log(ERROR, "Error message")
console.log(WARNING, "Warning message")
console.log(INFO, "Info message")

