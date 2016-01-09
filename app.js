var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(require('./controllers'));

app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Race app listening at http://%s:%s", host, port);

})