

function getBookCb(id, cb) {
  setTimeout(() => {
    if(id==666) {
      return cb("Dangerous book id")
    }
    cb(null, {
      "title": "título",
      "description": "description",
      "isbn": "4343543543",
      "authors": ["author1", "author3"]
    })
  }, 2000 * (id!=666)/2);
}


function getBook(id) {
  let p = new Promise(promiseResolver);

  return p;

  function promiseResolver(resolve, reject) {
    getBookCb(id, (e, res) => e ? reject(e) : resolve(res))
  }
}


function processBook(b) {
  console.log("Process book called")
  console.log(b)
}

function processBookError(e) {
  console.log("Process book error called")
  console.log(e)
}


getBookCb(123, (e, b) => e ? processBookError(e) : processBook(b))

getBook(123).then(processBook).catch(processBookError);
getBook(666).then(processBook).catch(processBookError);

console.log("Preparation code ended")