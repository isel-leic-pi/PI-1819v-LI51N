

module.exports = function(router) {
  router.get('/num-accesses', numAccesses)

  return router



  function numAccesses(req, rsp) {
    console.log(req.cookies.numAccesses)
    rsp.json({
      numAccesses : req.cookies.numAccesses || 0
    })
  }
}