const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('server listening');
});

app.use(function(req, res, next){
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.get('/', function(req,res,next) {
  res.send('hey');
});

app.get('/news', function(req,res,next) {
  res.send('no news');
});

app.get('*', function(req, res, next){
  res.send('we can handle it all')
});