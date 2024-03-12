"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contato_controller_1 = require("../controllers/contato.controller");
const Routes = (0, express_1.Router)();
const conatoConttroler = new contato_controller_1.ContatoController;
//ObjetoMagico
Routes.post('/contato', conatoConttroler.postContato);
Routes.get('/teste', (res) => {
    return res.json({
        "nome": "Maicon"
    });
});
exports.default = Routes;
