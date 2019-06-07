module.exports = async function(resultsTemplate) {
  return new Promise((resolve, reject) => {
    document.querySelector("#btnSearch").onclick = search;

    const searchText = document.querySelector("#search")
    const searchResults = document.querySelector("#searchResults")
  
    function search() {
      const searchUrl = `/api/search/books/authors/${searchText.value}`
      return fetch(searchUrl).then(processResponse)  
  
      async function processResponse(rsp) {
        if(rsp.ok) {
          let data = await rsp.json();
          searchResults.innerHTML = await resultsTemplate(data);
          return resolve();
        }
        reject(`Error on request`)
      }
    }
  });
} 