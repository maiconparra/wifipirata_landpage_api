"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contatoSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
});
exports.Contato = mongoose_1.default.model('Contato', contatoSchema);