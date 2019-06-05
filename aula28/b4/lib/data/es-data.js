'use strict';
const request = require('request-promise');


module.exports = function (es) {
  const URLS = new Urls(es)

  return {
    search: search,
    suggest: suggest,
    getBook: getBook,
    createBundle: createBundle,
    getBundle: getBundle,
    updateBundle: updateBundle,
    deleteBundle: deleteBundle,
    updateBundleName: updateBundleName
  }

  function search(field, query) {
    const esReqBody = {
      size: 10,
      query: {
        match: {
          [field]: query
        }
      }
    };
    return makeRequest(new Options(URLS.searchUrl(), esReqBody)).then(processSearch)

    function processSearch(body) {
      return body.hits.hits.map(({_source}) => _source);
    }
  }

  function suggest(field, query, cb) {
    const esReqBody = {
      size: 0,
      suggest: {
        suggestions: {
          text: query,
          term: {
            field: field,
            suggest_mode: 'always',
          }
        }
      }
    };

    return makeRequest(new Options(URLS.searchUrl(), esReqBody)).then(rspBody => rspBody.suggest.suggestions)
  }

  function getBook(bookId) {
    return makeRequest(new Options(URLS.bookUrl(bookId)))
  }

  function createBundle(bundleName) {
    const bundleReqBody = {
      name: bundleName || '',
      books: [],
    };

    return makeRequest(new Options(URLS.bundlesUrl(), bundleReqBody, true, 'POST'))
  }

  function getBundle(id, name) {
    return makeRequest(new Options(URLS.bundleUrl(id)))
  }

  function updateBundleName(id, name) {
    const bundleUrl = URLS.bundleUrl(id);
    return makeRequest(new Options(bundleUrl)).then(processBundleGet)

    function processBundleGet(bundle) {
      bundle = bundle._source;
      bundle.name = name;
      updateBundle(bundle)
    }
  }

  function updateBundle(bundleId, bundle) {
    console.log(bundle)
    const bundleUrl = URLS.bundleUrl(bundleId);
    return makeRequest(new Options(bundleUrl, bundle, true, 'PUT'))
  }

  function deleteBundle(id, name) {
    return makeRequest(new Options(URLS.bundleUrl(id), null, true, 'DELETE'))
  }


  function Urls() {
    const BASE_URL = `http://${es.host}:${es.port}/`
    const BOOKS_BASE_URL = `${BASE_URL}${es.books_index}/${es.books_type}/`;
    const SEARCH_URL = `${BOOKS_BASE_URL}_search`;
    const BUNDLES_URL = `${BASE_URL}${es.bundles_index}/${es.bundles_type}`;

    this.searchUrl = () => SEARCH_URL;
    this.bundlesUrl = () => BUNDLES_URL;
    this.bundleUrl = (id) => `${BUNDLES_URL}/${id}`;
    this.bookUrl = (id) => `${BOOKS_BASE_URL}${id}`;

  }

  function Options(url, body, json = true, method = 'GET') {
    this.url = url
    this.body = body
    this.json = json
    this.method = method
  }

  function makeRequest(options) {
    console.log("Request to %o", options)
    return request(options)
      .then(logResponse)
      .catch(err => {
        console.log("error received: %o", err.code)
        return {
          error: 'bad_gateway',
          reason: err.code,
        }
      });

    function logResponse(rsp) {
      //console.log("Response received: %o", rsp)
      return rsp
    }
  }
}




