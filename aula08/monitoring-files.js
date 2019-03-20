
let fs = require('fs')


module.exports.watchFiles = function (files, cb) {
  files.forEach(watchFile)


  function watchFile(file) {
    fs.access(file, fs.constants.F_OK, registerAsWatcher);

    function registerAsWatcher(err) {
      if (err) {
        return console.log(`File ${file} does not exist.`)
      }
      fs.watch(file, cb)
      console.log(`Watching file ${file}`)
      //fs.watchFile(file, processFileChangeStats)
    }
  }
}

