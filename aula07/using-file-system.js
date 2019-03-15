const jonas = require('fs')


jonas.readFile('file.txt', processFileContent)
jonas.readFile('file1.txt', processFileContent)


function processFileContent(err, data) {
  if(err) {
    return console.error(err)
  }

  console.log(data.toString())
}


console.log(`I'm done`);