const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const { listenerCount } = require('process');
const app = express();
const Sequelize = require('sequelize');
const session = require('express-session');
const { render } = require('ejs');



app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
  }));
  app.use(function adicionarUsuarioRender(req, res, next) {
    res.locals.nomeLogado = req.session.nomeLogado
    res.locals.usuarioLogado = req.session.usuarioLogado
    res.locals.sessionUsuario = req.session.sessionUsuario
    res.locals.estaLogado = req.session.estaLogado
    res.locals.sessionSenha = req.session.sessionSenha
    res.locals.erroLogin = req.session.erroLogin
    res.locals.erroCadastro = req.session.erroCadastro
    next()
  });



require('./database');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', require('./router/index'));
app.use('/loginUsuario', require('./router/rotaLogin'));
app.use('/cadastroUsuario', require('./router/rotaCadastro'));
app.use('/quizz', require('./router/rotaQuizz'));
app.use(express.static('./public'));
app.use(bodyparser.urlencoded({ extended: true }));








module.exports = app;
