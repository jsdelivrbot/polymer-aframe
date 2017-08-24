
var HTTP_PORT = 3102;
var HTTPS_PORT = 443;
var express  = require('express');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var busboyBodyParser = require('busboy-body-parser');
var compression=require('compression')
var https = require('https')
var fs=require('fs')
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
var passport = require('passport');
var session      = require('express-session');
var flash    = require('connect-flash');


/////////////////////////////////////////////

var app = express();
app.use(compression())


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(busboyBodyParser());
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(flash()); // use connect-flash for flash messages stored in session


// basic conf
// routes ======================================================================
app.use(express.static('/home/gicquel/polymer-aframe/')) // load satic routes 
var secureServer = https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/games.reveries-project.fr/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/games.reveries-project.fr/cert.pem')
  }, app)
  .listen(HTTPS_PORT, function () {
    console.log('Secure Server listening on port ' + HTTPS_PORT);
});

