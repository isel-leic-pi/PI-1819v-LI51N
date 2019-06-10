'use strict'

const path = require('path') 
const express = require('express') 
const morgan = require('morgan') 
const expressSession = require('express-session');
const passport = require('passport')

const FileStore = require('session-file-store')(expressSession);

const app = express()
app.use(expressSession(
  {
    resave: false, 
    saveUninitialized: true,
    store: new FileStore(),
    secret: "para o ano é o 38!!!"
  }
))

app.use(express.json())

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.use(passport.initialize()); 
app.use(passport.session());

app.use(morgan('dev'))
app.post('/login', validateLogin)
app.post('/logout', logout)
app.use('/auth', verifyAuthenticated)

app.get('/auth/home', homeAuthenticated)
app.get('/home', homeNotAuthenticated)
app.get('/session/count', showSessionCount)
app.get('/session/', showSession)


const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}/`))


//////////////////////////////////


function deserializeUser(user, done) {
  console.log("deserializeUserCalled")
  done(null, user)
}


function serializeUser(user, done) {
  console.log("serializeUserCalled")
  done(null, user)
}


function showSession(req, rsp) {
  rsp.end("SLB")
}


function  showSessionCount(req, rsp) {
    req.session.count = (req.session.count+1) || 1;
    rsp.end(`Current count is ${req.session.count}`)
}


function homeAuthenticated(req, rsp) {
  rsp.end(`Hello ${req.user.username}`)
}

function homeNotAuthenticated(req, rsp) {
  rsp.end(`Hello unknown user`)
}



function validateLogin(req, rsp) {
  if(validateUser(req.body.user, req.body.password)) {
    req.logIn({
      username: req.body.user
    }, (err) => rsp.redirect('/home'))
    return;
  }
  rsp.redirect('/login')


  function validateUser(){ return true; }

}

function verifyAuthenticated(req, rsp, next) {
  if(req.isAuthenticated())
    return next()

  rsp.redirect('/login')

}

function logout(req, rsp) {
  req.logOut()

  rsp.redirect('/home')
}



