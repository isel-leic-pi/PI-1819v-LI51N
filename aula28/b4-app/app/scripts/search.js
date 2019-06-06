module.exports = async function(resultsTemplate) {
  document.querySelector("#btnSearch").onclick = search;

  const searchText = document.querySelector("#search")
  const searchResults = document.querySelector("#searchResults")

  function search() {

    const searchUrl = `/api/search/books/authors/${searchText.value}`

    return fetch(searchUrl).then(processResponse)  

    async function processResponse(rsp) {
      if(rsp.ok) {
        searchResults.innerHTML = await resultsTemplate(res);
      }
      throw `Error on request`
    }
  }
} 