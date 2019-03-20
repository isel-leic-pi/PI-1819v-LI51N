'use strict'


let mf = require('./monitoring-files')

if (process.argv.length < 3) {
  console.log("Missing arguments for file names to monitor")
  return;
}

mf.watchFiles(process.argv.slice(2), processFileChangeEvent)

console.log('Preparation phase Done!')

// --------------------------------------

function processFileChangeEvent(eventType, fileName) {
  console.log(`Current event is ${eventType} on ${fileName}`)
}

function processFileChangeStats(curr, prev) {
  console.log(`Current size is ${curr.size}. Previous was ${prev.size}`)
}