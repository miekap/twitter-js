const express = require('express');
const router = express.Router();
//const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});
// gets the stylesheet
// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
// });
router.use(express.static('public'));

module.exports = router;
