import { Document } from "mongoose";
import Usuarios from "../models/Usuarios";

export interface IEventos extends Document{
    id?: string;
    nome?: string;
    foto?: string;
    descricao?: string;
    dataInicio?: Date;
    dataFim?: Date;
    horaInicio?: string;
    horaFim?: string;
    isActive?: Boolean; 
    dataCriacao?: Date;
    dataAtualizacao?: Date;
    agendados?: Array<Object>;
}