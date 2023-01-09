import { Document } from "mongoose";

export interface IFuncionarios extends Document{
    id?: string;
    nome?: string;
    foto?: string;
    idade?: Number;
    cargo?: string;
    naturalidade?: string;
    anoAdmissao?: Number;
    hobbie?: string;    
    isActive?: Boolean; 
    dataCriacao?: Date;
    dataAtualizacao?: Date;
}