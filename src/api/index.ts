import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import Routes from "./routes/routes";

import 'dotenv/config';

class App {

    public express: express.Application;


    constructor() {
        this.express = express();
        this.conneciton();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));

        if (process.env.NODE_ENVIRONMENT === 'development') 
            this.express.use(cors());
        if (process.env.NODE_ENVIRONMENT === 'homolog')
            this.express.use(cors({ origin: ['http://localhost:5173/', 'https://wifipirata.com.br'] }));
        if (process.env.NODE_ENVIRONMENT === 'production') 
            this.express.use(cors({ origin: ['https://wifipirata.com.br'] }));
    }

    private routes(): void {
        this.express.use(Routes);
    }

    private conneciton(): void {
        mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.4avqv.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`)
            .then(() => console.log('Conectado ao MongoDB!'))
            .catch((err) => console.error('Erro na conexão:', err));
    }

}

export default new App().express;
