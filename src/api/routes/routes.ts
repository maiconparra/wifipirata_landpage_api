import { Router, Response } from 'express';

import { ContatoController } from '../controllers/contato.controller';

const Routes = Router();

const conatoConttroler = new ContatoController;


//ObjetoMagico
Routes.post('/contato', conatoConttroler.postContato);

Routes.get('/teste', (res: Response) => {
    return res.json({
        "nome": "Maicon"
    });
});


export default Routes;