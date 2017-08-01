const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen(3000, function() {
  console.log('server listening');
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates
nunjucks.render('index.html', locals, function(err, output) {
  if (err) console.log(err);
  else console.log(output);
});


app.use(function(req, res, next){
  console.log(req.method, req.url, res.statusCode);
  next();
});

app.use(function(req, res, next){
  
})
// app.use('/special/', function(req,res,next) {
//   console.log('this person is soooo special');
//   next();
// });

app.use('/', routes);



// app.get('/', function(req,res,next) {
//   res.send('hey');
// });

// app.get('*', function(req, res, next){
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });

// app.post('*', function(req, res, next) {
//   res.send(`didn\'t actually post ${req.url}, but whatever`);
// //  res.sendStatus(201);
// });
