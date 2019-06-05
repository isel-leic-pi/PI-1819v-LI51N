'use strict';
const fetch = require('node-fetch');


module.exports = function (es) {
  const url = `http://${es.host}:${es.port}/${es.books_index}/${es.books_type}/_search`;

  return {
    search: search,
    suggest: suggest
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
    return makeRequest(url, new Options(esReqBody, "POST"))
      .then(processSearch)

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

    return makeRequest(url, new Options(esReqBody, "POST")).then(rspBody => rspBody.suggest.suggestions)
  }


  function Options(body, method = 'GET', contentType = 'application/json') {
    this.body = JSON.stringify(body)
    this.headers = {
      'Content-Type': contentType
    }
    this.method = method
  }

  function makeRequest(url, options) {
    console.log("Request to '%s' with options %o", url, options)
    return fetch(url, options)
      .then(res => res.json())
      .catch(err => {
        return {
          error: 'bad_gateway',
          reason: err.code,
        }
      });
  }
}




