'use strict'

const path = require('path') 
const express = require('express') 
const morgan = require('morgan') 
const nconf = require('nconf')
const pkg = require('./package.json')

nconf.argv().env('__')
nconf.defaults({conf: `${__dirname}/config.json`}) 
nconf.file(nconf.get('conf'))

const esData = require('./lib/data/es-data')(nconf.get('es'))
const booksService = require('./lib/service/books-service')(esData)
const bundleService = require('./lib/service/bundle-service')(esData, booksService)
const searchApi = require('./lib/api/search-api')(express.Router(), booksService);
const bundleApi = require('./lib/api/bundle-api')(express.Router(), bundleService);


const app = express()
app.use(morgan('dev'))

app.use('/', express.static(path.join(__dirname, "..", "b4-app", "dist")))
app.use(express.json())
app.get('/api/version', (req, res) => res.status(200).send(pkg.version)) 
app.use('/api/', searchApi)
app.use('/api/bundle', bundleApi)

app.listen(nconf.get('port'), () => console.log(`Server listening on port http://localhost:${nconf.get('port')}/`))