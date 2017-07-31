const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('server listening');
});

app.get('/', function(req,res,next) {
  res.send('hey');
});

app.get('/news', function(req,res,next) {
  res.send('no news');
});
