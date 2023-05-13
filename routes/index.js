var express = require('express');
const db = require('../database');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = 'Javier suarez'
  res.render('index', { 
    title: 'programacion 2',
    name: name,
   });
});

router.post('/', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let comment = req.body.comment;
  let date = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  db.insert(name, email, comment, date, ip);
  console.log(req.body)
  res.redirect('/');

});


router.get('/contactos', function(req, res, next) {
  db.select(function (rows) {
    console.log(rows);
  });
  res.send('ok');
});

module.exports = router;
