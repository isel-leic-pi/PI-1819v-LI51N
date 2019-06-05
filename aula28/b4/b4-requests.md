# Better Book Bundle Builder (`b4`)

## Sample HTTP requests

### Search API

- Search:
  - URI: `/api/search/books/:field/:query`
  - Method: `GET`
  - Example `curl -v localhost:60702/api/search/books/authors/Shakespeare`
- Suggestions
  - Uri: `/api/suggest/:field/:query`
  - Method: `GET`
  - Example `curl -v localhost:60702/api/suggest/authors/lipman`

### Bundle API

- Create a bundle
  - URI: `/api/bundle/`
  - Method: `POST`
  - Body:
  
  ```json
    { "name": "<name>" }
  ```

  - Example `curl -v -d '{ "name": "playlist1" }' -H "Content-Type: application/json" -X POST localhost:60702/api/bundle`

- Get a bundle
  - URI: `/api/bundle/:id`
  - Method: `GET`
  - Example `curl localhost:60702/api/bundle/dCXyGmsBkZNx_Ic3LkAY`

- Delete a bundle
  - URI: `/api/bundle/:id`
  - Method: `DELETE`
  - Example `curl -v -X DELETE localhost:60702/api/bundle/dCXyGmsBkZNx_Ic3LkAY`


- Update a bundle
  - URI: `/api/bundle/:id`
  - Method: `PUT`
  - Body:
  
  ```json
    { "name": "<name>" }
  ```

  - Example `curl -v -d '{ "name": "playlist11" }' -H "Content-Type: application/json" -X PUT localhost:60702/api/bundle/dCXyGmsBkZNx_Ic3LkAY`

- Add book to a bundle
  - URI: `/api/bundle/:id/book/:bookid`
  - Method: `PUT`
  - Example `curl -v -X PUT localhost:60702/api/bundle/dCXyGmsBkZNx_Ic3LkAY/book/pg1`

- Delete book from a bundle
  - URI: `/api/bundle/:id/book/:bookid`
  - Method: `DELETE`
  - Example `curl -v -X DELETE localhost:60702/api/bundle/dSVFJWsBkZNx_Ic3DECl/book/pg1`
