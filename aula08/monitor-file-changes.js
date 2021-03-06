'use strict'

let fs = require('fs')

if (process.argv.length < 3) {
  console.log("Missing arguments for file names to monitor")
  return;
}
process.argv.slice(2).forEach(watchFile)


function watchFile(file) {
  fs.access(file, fs.constants.F_OK, registerAsWatcher);

  function registerAsWatcher(err) {
    if(err) {
      return console.log(`File ${file} does not exist.`)
    }
    fs.watch(file, processFileChangeEvent)
    console.log(`Watching file ${file}`)
    fs.watchFile(file, processFileChangeStats)
  }
}

console.log('Preparation phase Done!')

// --------------------------------------

function processFileChangeEvent(eventType, fileName) {
  console.log(`Current event is ${eventType} on ${fileName}`)
}

function processFileChangeStats(curr, prev) {
  console.log(`Current size is ${curr.size}. Previous was ${prev.size}`)
}