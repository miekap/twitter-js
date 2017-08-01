const express = require('express');
const router = express.Router();
//const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

// gets the stylesheet
// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
// });
router.use(express.static('public'));

module.exports = router;
