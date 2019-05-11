module.exports = function (booksData) {

  return {
    getAll: getAll,
    getBooksTitleWithIds: getBooksTitleWithIds
  }


  function getAll() {
    return booksData.getAll()
  }

  /**
   * @return \{{{Promise<String[]>}}\} {{returns a promise for a string[] with the book titles for the given ids}}{{}}
   */
  function getBooksTitleWithIds(...ids) {
    return Promise.all(ids.map(id => booksData.getBookWithId(id))) // Promise<Book[]>
      .then(books => books.map(b => b.title))            // Promise<String[]>
  }
}