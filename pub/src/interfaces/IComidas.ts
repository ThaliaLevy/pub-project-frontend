import { Document } from "mongoose";

export interface IComidas extends Document{
    id?: string;
    nome?: string;
    foto?: string;
    descricao?: string;
    preco?: Number;
    isActive?: Boolean; 
    dataCriacao?: Date;
    dataAtualizacao?: Date;
}