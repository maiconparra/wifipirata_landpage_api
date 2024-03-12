"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContatoController = void 0;
const business_1 = require("../../business");
class ContatoController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({
                "Maicon": "Maicon"
            });
        });
    }
    postContato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const formContato = req.body;
            const contato = new business_1.Contato(formContato);
            yield contato.save()
                .then(result => {
                return res.json(result);
            }).catch(err => {
                return res.json(err);
            });
            return;
        });
    }
}
exports.ContatoController = ContatoController;
