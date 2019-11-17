
// app.js
// init project
var express = require('express');
var app = express();
var fs = require('fs');
var { APIRouter  } = require('./server/api');
var {db, models} = require('./server/db');
var path = require('path');
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('client/views'));

app.use('/api', APIRouter);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname+'/client/views/index.html'));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
