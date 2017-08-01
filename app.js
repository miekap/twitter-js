const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('server listening');
});

app.use(function(req, res, next){
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.use('/special/', function(req,res,next) {
  console.log('this person is soooo special');
  next();
});

app.get('/', function(req,res,next) {
  res.send('hey');
});

app.get('*', function(req, res, next){
  res.send('we can handle it all');
});

app.post('*', function(req, res, next) {
  res.send(`didn\'t actually post ${req.url}, but whatever`);
//  res.sendStatus(201);
})
