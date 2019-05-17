'use strict'

const express = require('express') 
const morgan = require('morgan') 
const nconf = require('nconf')
const cookieParser = require('cookie-parser')
const pkg = require('./package.json')

nconf.argv().env('__')
nconf.defaults({conf: `${__dirname}/config.json`}) 
nconf.file(nconf.get('conf'))

const esData = require('./lib/data/es-data')(nconf.get('es'))
const booksService = require('./lib/service/books-service')(esData)
const searchApi = require('./lib/api/search-api')(express.Router(), booksService);

const clientStateApi = require('./lib/api/client-state-api')(express.Router())

const app = express()
app.use(cookieParser())

app.use(countAccesses)

app.use(morgan('dev'))
app.get('/api/version', (req, res) => res.status(200).send(pkg.version)) 
app.use('/api/', searchApi)
app.use('/api/client-state/', clientStateApi)

app.listen(nconf.get('port'), () => console.log(`Server listening on port http://localhost:${nconf.get('port')}/`))



function countAccesses(req, rsp, next) {
  let numAccesses = Number(req.cookies.numAccesses || 0) + 1
  
  rsp.cookie("numAccesses", numAccesses, { path: '/'})
  rsp.cookie("numAccesses1", numAccesses, { path: '/'})

  next()
}
