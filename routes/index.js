const express = require('express');
const router = express.Router();
//const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');
// const body = require('body-parser');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: true, populate: true  } );
});

router.get('/tweets/:id', function(req, res) {
  var id = +req.params.id;
  var uniqueId = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: uniqueId } );
});

// gets the stylesheet
// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
// });
router.use(express.static('public'));

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
