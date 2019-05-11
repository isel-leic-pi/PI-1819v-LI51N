
const books = require('./books.json')

const booksDataMockGenerator = require('./lib/books-data-mock')
const booksServiceGenerator = require('../books-service')


const expect = require('chai').expect;



describe("Book services tests", function () {

  it("should return all books", function (done) {
    // Arrange
    const booksService = getBookServiceForData(books)

    // Act 
    booksService.getAll().then(processGetAllBooks);


    // Assert
    function processGetAllBooks(books) {
      expect(books).to.be.an('array')
        .with.lengthOf(books.length)
        .to.deep.equal(books)
      done()
    }
  })
  it("should return an empty array when there are no books", function (done) {
    const booksService = getBookServiceForData([]);

    booksService.getAll().then(processGetAllBooks);


    function processGetAllBooks(books) {

      expect(books).to.be.an('array')
        .with.lengthOf(0)
      done()
    }
  })

  it("should get all book titles given its ids", function (done) {

    const booksService = getBookServiceForData(books)

    booksService.getBooksTitleWithIds(1,2,3).then(processBooksTitles);

    function processBooksTitles(titles) {
      expect(titles).to.be.an('array')
        .with.lengthOf(books.length)
        .to.deep.equal(books.map(b => b.title))
      done()
    }
  })
})



function getBookServiceForData(data) {
  const booksDataMock = booksDataMockGenerator(data)
  return booksServiceGenerator(booksDataMock)
}