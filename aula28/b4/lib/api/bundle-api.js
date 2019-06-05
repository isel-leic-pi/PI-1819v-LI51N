/**
 * Provides API endpoints for managing bundles.
 */
'use strict';

module.exports = (router, bundlesService) => {
  /**
   * Create a new bundle with the specified name.
   * Example: POST /api/bundle/
   *          body: { "name": "<name>" }
   */
  router.post('/', createBundle)

  /**
   * Gets the bundle with the specified id
   * Example: GET /api/bundle/:id
   */
  router.get('/:id', getBundle)

  /**
   * Updates the bundle with the specified id
   * Example: PUT /api/bundle/:id
   *          body: { "name": "<name>" }
   */
  router.put('/:id', updateBundle)

  /**
   * Deletes the bundle with the specified id
   * Example: DELETE /api/bundle/:id
   */
  router.delete('/:id', deleteBundle)


  /**
   * Puts a book into a bundle with the specified ids
   * Example: PUT /api/bundle/:id/book/:pgid
   */
  router.put('/:id/book/:pgid', addBookToBundle)

  /**
   * Deletes a book from a bundle with the specified ids
   * Example: DELETE /api/bundle/:id/book/:pgid
   */
  router.delete('/:id/book/:pgid', deleteBookFromBundle)

  return router;


  function createBundle(req, res) {
    bundlesService.createBundle(req.body.name)
      .then(rspData => res.status(201).json(rspData))
  }

  function getBundle(req, res) {
    bundlesService.getBundle(req.params.id)
      .then(rspData => res.status(201).json(rspData))
  }

  function updateBundle(req, res) {
    bundlesService.updateBundle(req.params.id, req.body.name)
      .then(rspData => res.status(201).json(rspData))
  }

  function deleteBundle(req, res) {
    bundlesService.deleteBundle(req.params.id)
      .then(rspData => res.status(200).json(rspData))
  }

  function addBookToBundle(req, res) {
    bundlesService.addBookToBundle(req.params.id, req.params.pgid)
      .then(rspData => res.status(201).json(rspData))
  }

  function deleteBookFromBundle(req, res) {
    bundlesService.deleteBookFromBundle(req.params.id, req.params.pgid)
      .then(rspData => res.status(200).json(rspData))
  }


};


