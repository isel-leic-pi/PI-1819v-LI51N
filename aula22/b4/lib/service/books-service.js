
module.exports = function(esData) {
  return {
    search: search,
    suggest: suggest
  }


  function search(field, query, cb) {
    esData.search(field, query, cb)
  }

  function suggest(field, query, cb) {
    esData.suggest(field, query, cb)
  }
}