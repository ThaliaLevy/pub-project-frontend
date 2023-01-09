import { Document } from "mongoose";

export interface IFornecedores extends Document{
    id?: string;
    nome?: string;
    foto?: string;
    descricao?: string;
    isActive?: Boolean; 
    dataCriacao?: Date;
    dataAtualizacao?: Date;
}