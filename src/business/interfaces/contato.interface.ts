
import mongoose, { Document } from 'mongoose';


export interface IContato extends Document {
    name: string;
    email: string;
    whatsapp: string
}