const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST gets urlencoded bodies
router.post('/tweets', urlencodedParser, function (req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
})

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name } );
  res.render( 'index', { tweets: list, showForm: true, currentUser: name } );
});

router.get('/:id', function(req, res){
	let id  = req.params.id;
	let list = tweetBank.find( {id: id} );
	console.log(list)
	res.render( 'index', { tweets: list } );
})

module.exports = router;
