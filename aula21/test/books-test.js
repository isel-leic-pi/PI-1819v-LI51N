
const books = require('./books.json')


const expect = require('chai').expect;
const booksDataMock = require('./lib/books-data-mock')(books)
const booksService = require('../books-service')(booksDataMock)

describe("Book services tests", function() {

  it("should return all books", function(done) {
    booksService.getAll(processGetAllBooks);
    processGetAllBooks(123)

    function processGetAllBooks(e, books) {
        expect(e).not.to.be.an('error')

        expect(books).to.be.an('array')
            .with.lengthOf(1)
            .to.deep.equal(books)

        done()
    }
  })
})