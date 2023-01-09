import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { IFuncionarios } from "../interfaces/IFuncionarios";

const FuncionariosSchema = new mongoose.Schema({
    id: {
        type: String,
    },

    nome: {
        type: String,
        required: [true, "Um nome é necessário para realizar o cadastro"],
    },

    foto: {
        type: String,
        required: [true, "Uma foto é necessária para realizar o cadastro"]
    },

    idade: {
        type: Number,
        required: [true, "Uma idade é necessária para realizar o cadastro"],
    },

    cargo: {
        type: String,
        required: [true, "Um cargo é necessário para realizar o cadastro"],
    },

    naturalidade: {
        type: String,
        required: [true, "Uma naturalidade é necessária para realizar o cadastro"],
    },

    anoAdmissao: {
        type: Number,
        required: [true, "Ano de admissão é necessário para realizar o cadastro"],
    },

    hobbie: {
        type: String,
        required: [true, "Ano de admissão é necessário para realizar o cadastro"],
    },
    
    isActive: {
        type: Boolean,
        default: true
    },

    dataCriacao: {
        type: Date,
        default: Date.now()
    },

    dataAtualizacao: {
        type: Date,
        default: Date.now()
    },
},
{
    versionKey: false
}
);

const Funcionarios = mongoose.model<IFuncionarios>("funcionarios", FuncionariosSchema)

export default Funcionarios;