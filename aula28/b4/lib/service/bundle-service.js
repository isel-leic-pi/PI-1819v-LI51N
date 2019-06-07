
module.exports = function (esData) {
  return {
    getBundles: getBundles,
    createBundle: createBundle,
    getBundle: getBundle,
    updateBundle: updateBundle,
    deleteBundle: deleteBundle,
    addBookToBundle: addBookToBundle,
    deleteBookFromBundle: deleteBookFromBundle
  }

  function getBundles(size) {
    return esData.getBundles(size)
  }

  function createBundle(bundleName) {
    return esData.createBundle(bundleName)
  }

  function getBundle(bundleId) {
    return esData.getBundle(bundleId)
  }

  function updateBundle(bundleId, bundleName) {
    return esData.updateBundleName(bundleId, bundleName)
  }

  function deleteBundle(bundleId) {
    return esData.deleteBundle(bundleId)
  }

  function addBookToBundle(bundleId, bookId) {
    return Promise.all([esData.getBundle(bundleId), esData.getBook(bookId)])
      .then(processBookAndBundle)

    function processBookAndBundle([bundleRes, bookRes]) {
      const {_source: bundle, _version: version, _id: bundleId } = bundleRes;
      const {_source: book} = bookRes;

      if(!bundle.books.find(b => b.id == bookId)) {
        bundle.books.push({
          id: bookId,
          title: book.title
        })
      }
      return esData.updateBundle(bundleId, bundle)
    }
  }

  function deleteBookFromBundle(bundleId, bookId) {
    return esData.getBundle(bundleId).then(processBundle)

    function processBundle(bundleRes) {
      const { _source: bundle } = bundleRes
      bundle.books = bundle.books.filter(b => b.id != bookId)
      return esData.updateBundle(bundleId, bundle)
    }
  }
}