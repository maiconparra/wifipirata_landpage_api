"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _contatocontroller = require('../controllers/contato.controller');

const Routes = _express.Router.call(void 0, );

const conatoConttroler = new _contatocontroller.ContatoController;


//ObjetoMagico
Routes.post('/contato', conatoConttroler.postContato);

Routes.get('/teste', (res) => {
    return res.json({
        "nome": "Maicon"
    });
});


exports. default = Routes;