module.exports = function (books) {
  return {
    getAll: getAll,
    getBookWithId: getBookWithId
  }

  function getAll() {
    return Promise.resolve(books)
  }


  function getBookWithId(id) {
    let book = books.find(b => b.id == id);

    if(book) {
      return Promise.resolve(book)
    }

    return Promise.reject("Book not found")
  }
}
