import { Document } from "mongoose";

export interface IAutenticacao extends Document{
    email: string;
    senha: string;
}