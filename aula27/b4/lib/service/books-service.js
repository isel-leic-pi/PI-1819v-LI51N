
module.exports = function(esData) {
  return {
    search: search,
    suggest: suggest
  }


  async function search(field, query) {
    return esData.search(field, query)
  }

  function suggest(field, query) {
    return esData.suggest(field, query)
  }
}