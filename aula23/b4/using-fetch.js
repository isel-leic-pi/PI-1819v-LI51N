let fetch = require('node-fetch')


let url = 'http://localhost:9200/books/_search'

let data = {
  "size": 0,
  "suggest": {
    "suggestions": {
      "text": "lipman",
      "term": {
        "field": "authors",
        "suggest_mode": "always"
      }
    }
  }
}

fetch(url, {
  method: 'GET', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))

