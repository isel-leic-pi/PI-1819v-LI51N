window.addEventListener("load",function() {
  console.log("$$$$$$$")
  window.addEventListener('hashchange', routeChanged);

  const routes = {
    bookDetails: bookDetails
  }



  function routeChanged() {
    let [routeName, ...params] = window.location.hash.split('/')
    routeName = routeName.substring(1)
    let route = routes[routeName]

    route.apply(null, params)
  }


  function bookDetails(bookId) {
    console.log(`Requesting details for book with id ${bookId}`)
  }


})