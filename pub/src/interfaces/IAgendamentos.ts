import { Document } from "mongoose";

export interface IAgendamentos extends Document{
    idUsuario: string;
    idEvento: string;
    nomeUsuario?: string;
    nomeEvento?: string;
    data?: Date;
    hora?: string;
}