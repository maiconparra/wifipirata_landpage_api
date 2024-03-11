import mongoose from 'mongoose';

//Interface
import { IContato } from '../interfaces/contato.interface';

const contatoSchema = new mongoose.Schema<IContato>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
});

export const Contato = mongoose.model<IContato>('Contato', contatoSchema);