var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function (req, res, next) {
  if (req.session.estaLogado) {
    console.log("testando")
    res.render('home');
  } else {
    console.log("testando")
    res.redirect('/loginUsuario');
  }

});
module.exports = router;
