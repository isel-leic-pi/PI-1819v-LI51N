'use strict'

const express = require('express') 
const morgan = require('morgan') 
const nconf = require('nconf')
const pkg = require('./package.json')

nconf.argv().env('__')
nconf.defaults({conf: `${__dirname}/config.json`}) 
nconf.file(nconf.get('conf'))

const esData = require('./lib/data/es-data')(nconf.get('es'))
const booksService = require('./lib/service/books-service')(esData)
const searchApi = require('./lib/api/search-api')(express.Router(), booksService);


const app = express()
app.use(morgan('dev'))
app.get('/api/version', (req, res) => res.status(200).send(pkg.version)) 
app.use('/api/', searchApi)

app.listen(nconf.get('port'), () => console.log(`Server listening on port http://localhost:${nconf.get('port')}/`))