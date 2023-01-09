import { Document } from "mongoose";
import Eventos from "../models/Eventos";

export interface IUsuarios extends Document{
    id?: string;
    nome: string;
    isAdmin?: Boolean;
    cpf: string; 
    telefone?: string;
    email: string; 
    senha: string;     
    isActive?: Boolean; 
    dataCriacao?: Date;
    dataAtualizacao?: Date;
    eventos?: Array<Object>;
}