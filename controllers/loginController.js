const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {

    async store(req, res) {
        const { senha } = req.body;
        const { email } = req.body;
        
        let getUser = await User.findOne({ where: {email: email, senha: senha } }) 
       // Vá no banco de dados e busque o usuário que tem o email igual e senha ao que foi passado no body
        if (getUser?.email && getUser?.senha) {
            const nome = getUser.nome;
            console.log("Logado");
            req.session.estaLogado = true;
            req.session.nomeLogado = nome;
            req.session.sessionUsuario = email;
            req.session.sessionSenha = senha;
            res.redirect('/');

        } else {
            console.log("Nome ou Email errado");
            req.session.erroLogin = true;
            res.redirect('/loginUsuario')

        }

    }
}