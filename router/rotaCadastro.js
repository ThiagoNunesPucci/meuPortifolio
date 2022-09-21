const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const cadastroRoute = require('../controllers/controllerCadastro');

router.use(bodyParser.urlencoded({extended:true}));
router.post('/', cadastroRoute.store);
router.get('/', (req, res) =>{
  res.render('cadastro');
});
  
  module.exports = router;