"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
require("dotenv/config");
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.conneciton();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        //if (process.env.NODE_ENVIRONMENT === 'development') 
        this.express.use((0, cors_1.default)());
        /*if (process.env.NODE_ENVIRONMENT === 'homolog')
            this.express.use(cors({ origin: ['http://localhost:5173/', 'https://www.wifipirata.com.br'] }));
        if (process.env.NODE_ENVIRONMENT === 'production')
            this.express.use(cors({ origin: ['https://www.wifipirata.com.br'] }));*/
    }
    routes() {
        this.express.use(routes_1.default);
    }
    conneciton() {
        mongoose_1.default.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.4avqv.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`)
            .then(() => console.log('Conectado ao MongoDB!'))
            .catch((err) => console.error('Erro na conexão:', err));
    }
}
exports.default = new App().express;
