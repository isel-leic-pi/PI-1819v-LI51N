window.addEventListener("load", function() {
  const URI_SEARCH = "http://localhost:60702/api/search/books/authors/"

  document.querySelector("#searchBtn").onclick = search
  const searchTextBox = document.querySelector("#search")
  const resultsElement = document.querySelector("#results")

  function search() {
    let uri = URI_SEARCH + searchTextBox.value;
    fetch(uri).then(response => response.json()).then(processSearchResponse)


    function processSearchResponse(body) {
        const bookTitles = body.map(b => ({ id: b.id, title: b.title}) );
  
        const template = `
          <ul>
            {{#each this}}
              <li><a href="#bookDetails/{{id}}">{{title}}</a></li>
            {{/each}}
          </ul>
        
        `;
        
        const templateInstance = Handlebars.compile(template);
        resultsElement.innerHTML = templateInstance(bookTitles)


    }
  }
})
