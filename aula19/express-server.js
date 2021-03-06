



const express = require('express');
const path = require('path');
const app = express();

const booksApi = require('./books-api')(express.Router(), express.Router())

app.use('/files', express.static(path.join(__dirname, "public"), {index: 'default.txt'}))


// app.get('/api/books', booksApi.listBooks)
// app.get('/api/books/:id', booksApi.bookDetails)

app.use(booksApi.global)
app.use('/api/books', booksApi.router)


const PORT = 3000

app.listen(PORT, function (e) {
  if (e) {
    return console.log(e)
  }
  console.log(`server listening on port ${PORT}`)
});
