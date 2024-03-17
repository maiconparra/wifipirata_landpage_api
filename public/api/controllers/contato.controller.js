"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _business = require('../../business');



 class ContatoController {



     async index(req, res) {

        return  res.json({
            "Maicon": "Maicon"
        });
    }

     async postContato(req, res) {

        const formContato = req.body;

        const contato = new (0, _business.Contato)(formContato);

        await contato.save()
            .then(result => {
                return res.json(result);
            }).catch(err => {
                return res.json(err);
            });

        return;
    }
} exports.ContatoController = ContatoController;