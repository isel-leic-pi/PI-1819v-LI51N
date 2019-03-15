'use strict'


let fs = require('fs')
fs.watch('file.txt',  processFileChangeEvent)
fs.watchFile('file.txt',  processFileChangeStats)

console.log('Preparation phase Done!')

// --------------------------------------

function processFileChangeEvent(eventType, fileName) {
  console.log(`Current event is ${eventType} on ${fileName}`)
}

function processFileChangeStats(curr, prev) {
  console.log(`Current size is ${curr.size}. Previous was ${prev.size}`)
}