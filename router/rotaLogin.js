const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const path = require('path');
const loginController = require('../controllers/loginController');


router.use(bodyParser.urlencoded({extended:true}));
router.post('/', loginController.store);
router.get('/', (req, res) => {
  console.log("testando")
  res.render('login');
});
module.exports = router;
