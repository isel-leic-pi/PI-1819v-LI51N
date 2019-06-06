/**
 * Provides API endpoints for searching the books index.
 */
'use strict';

module.exports = (router, searchService) => {
  /**
   * Search for books by matching a particular field value.
   * Example: /api/search/books/authors/Twain
   */
  router.get('/search/books/:field/:query', search)

  /**
   * Search for books by matching a particular field value.
   * Example: /api/suggest/authors/Twain
   */
  router.get('/suggest/:field/:query', suggest)
  return router



  function search(req, rsp) {
    rsp.replyTo(searchService.search(req.params.field, req.params.query), 200)
  }

  function suggest(req, rsp) {
    searchService.suggest(req.params.field, req.params.query).then(processSuggestResponse)

    function processSuggestResponse(data) {
      rsp.status(200).json(data)
    }
  }
};


