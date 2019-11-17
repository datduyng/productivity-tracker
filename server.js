
// app.js
// init project
var express = require('express');
var app = express();
var fs = require('fs');
var { APIRouter  } = require('./server/api');
var { BaseRoute } = require('./server/base');
var {db, models} = require('./server/db');
var expressReactView = require("express-react-views");

app.set("view engine", "jsx");
app.engine("jsx", expressReactView.createEngine());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('client/views'));

app.use('/api', APIRouter);
app.use('/', BaseRoute);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
