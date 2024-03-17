"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _routes = require('./routes/routes'); var _routes2 = _interopRequireDefault(_routes);

require('dotenv/config');

class App {

    


    constructor() {
        this.express = _express2.default.call(void 0, );
        this.conneciton();
        this.middleware();
        this.routes();
    }

     middleware() {
        this.express.use(_express2.default.json());
        this.express.use(_express2.default.urlencoded({ extended: true }));

        //if (process.env.NODE_ENVIRONMENT === 'development') 
            this.express.use(_cors2.default.call(void 0, ));
        /*if (process.env.NODE_ENVIRONMENT === 'homolog')
            this.express.use(cors({ origin: ['http://localhost:5173/', 'https://www.wifipirata.com.br'] }));
        if (process.env.NODE_ENVIRONMENT === 'production') 
            this.express.use(cors({ origin: ['https://www.wifipirata.com.br'] }));*/
    }

     routes() {
        this.express.use(_routes2.default);
    }

     conneciton() {
        _mongoose2.default.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.4avqv.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`)
            .then(() => console.log('Conectado ao MongoDB!'))
            .catch((err) => console.error('Erro na conexão:', err));
    }

}

exports. default = new App().express;