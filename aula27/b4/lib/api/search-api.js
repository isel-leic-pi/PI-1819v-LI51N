/**
 * Provides API endpoints for searching the books index.
 */
'use strict';

module.exports = (router, searchService) => {
  /**
   * Search for books by matching a particular field value.
   * Example: /search/books/authors/Twain
   */
  router.get('/search/books/:field/:query', search)

  /**
   * Search for books by matching a particular field value.
   * Example: /suggest/authors/Twain
   */
  router.get('/suggest/:field/:query', suggest)
  return router



  async function search(req, rsp) {
    try {
      const data = await searchService.search(req.params.field, req.params.query)
      rsp.status(200).json(data)  
    } catch(e) {
      
    }
  }

  function suggest(req, rsp) {
    searchService.suggest(req.params.field, req.params.query).then(processSuggestResponse)

    function processSuggestResponse(data) {
      rsp.status(200).json(data)
    }
  }

  
  
};


