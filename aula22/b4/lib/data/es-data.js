'use strict';
const request = require('request');


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
    return makeRequest(new Options(url, esReqBody)).then(processSearch)

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

    return makeRequest(new Options(url, esReqBody))
  }


  function Options(url, body, json = true, method = 'GET') {
    this.url = url
    this.body = body
    this.json = json
    this.method = method
  }

  function makeRequest(options) {
    return new Promise((resolve, reject) => {
      console.log("Request to %o", options)
      request(options, (err, esRes, esResBody) => {
        if (err) {
          return reject({
            error: 'bad_gateway',
            reason: err.code,
          });
        }
        resolve(esResBody)
      });
    });
  }
}




