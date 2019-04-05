const request = require('request');

var options = {
  method: 'GET',
  url: 'http://ws.audioscrobbler.com/2.0/',
  qs:
  {
    method: 'artist.search',
    format: 'json',
    artist: 'John',
    page: '1',
    api_key: 'a880a64f68cae8e80b434fad24124f84'
  },
  headers:
  {
    'Postman-Token': '016be79a-1466-4596-81ee-100ce964949b',
    'cache-control': 'no-cache'
  }
};

//request(options, handleResponse);

const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&format=json&artist=John&page=1&api_key=a880a64f68cae8e80b434fad24124f84'
//request(url, handleResponse)

request.get(url, handleResponse)


function handleResponse(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
}
