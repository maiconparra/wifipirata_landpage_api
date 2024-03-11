import { Request, Response } from "express";

import { Contato } from "../../business";
import { DtoContato } from "../dtos/contato";


export class ContatoController {



    public async index(req: Request, res: Response): Promise<Response> {

        return  res.json({
            "Maicon": "Maicon"
        });
    }

    public async postContato(req: Request, res: Response): Promise<Response> {

        const formContato: DtoContato = req.body;

        const contato = new Contato(formContato);

        await contato.save()
            .then(result => {
                return res.json(result);
            }).catch(err => {
                return res.json(err);
            });

        return;
    }
}