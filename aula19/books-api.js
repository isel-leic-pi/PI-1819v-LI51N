

module.exports = (router, routerGlobal) => {
  router.get('/', listBooks)
  router.get('/:id', bookDetails)

  function listBooks(req, rsp) {
    rsp.send("list books")
  }

  function bookDetails(req, rsp) {
    rsp.send(`Details for book with id=${req.params.id}`)
    console.log('query: %o', req.query)
  }


  function globalMwBooks(req, rsp, next) {
    console.log("Global mw from books-api")
    next()
  }

  function globalMwBooks1(req, rsp, next) {
    console.log("Global mw from books-api1")
    next()
  }


  routerGlobal.use(globalMwBooks, globalMwBooks1)


  return {
    router: router,
    global: routerGlobal
  }
}

