const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const path = require('path');
const loginController = require('../controllers/quizzController');


router.get('/', (req, res) => {
  
  res.render('login');
});
module.exports = router;
