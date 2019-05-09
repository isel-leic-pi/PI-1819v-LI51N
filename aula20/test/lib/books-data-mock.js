module.exports = function (books) {
  return {
    getAll: getAll
  }

  function getAll(cb) {
    cb(null, books)
  }
}
