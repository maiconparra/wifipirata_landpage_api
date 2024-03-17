"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

//Interface


const contatoSchema = new _mongoose2.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
});

 const Contato = _mongoose2.default.model('Contato', contatoSchema); exports.Contato = Contato;