const net = require('net')
const mf = require('./monitoring-files')

const PORT = 1904


mf.watchFiles('file.txt', fileChanged)


let server = net.createServer()
server.listen(PORT)

server.on('connection', handleClientSocketErrors)
server.on('connection', logClientConnection)
server.on('connection', processClientConnection)

server.on('listen', processListen)
server.on('error', processListenError)


console.log(`server preparation ends`)

// Event loop processing phase

let clients = [];

function processListen() {
  console.log(`Server listening on port ${PORT}`)
}

function processListenError(e) {
    console.log("#################")
    return console.log(`Error listening on port ${PORT}. Reason ${e}`)
}


function processClientConnection(clientSocket) {
  clientSocket.write("Hello!!")
  clients.push(clientSocket)

  clientSocket.on('close', processClose)

  function processClose() {
    console.log(`Client connection closed`)
    clients = clients.filter(s => s !== clientSocket)
    console.log(`Remaining clients ${clients.length}`)
  }
}


function logClientConnection(clientSocket) {
  console.log(`Client connected from %o`, clientSocket.address())
}

function handleClientSocketErrors(clientSocket) {
  clientSocket.on('error', handleClientError)


  function handleClientError(e) {
    console.log("###############")
    console.log(e)
  }
}

function fileChanged(err, data) {
  clients.forEach(notifyClient)

  function notifyClient(clientSocket) {
    clientSocket.write(`Notifying client with ${data}\n`)
  }
}


