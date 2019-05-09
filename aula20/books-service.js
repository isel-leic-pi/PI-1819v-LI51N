module.exports = function (booksData) {

  return {
    getAll: getAll
  }


  function getAll(cb) {
    return booksData.getAll(cb)
  }

}