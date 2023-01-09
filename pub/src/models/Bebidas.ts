import mongoose from "mongoose";
import { IBebidas } from "../interfaces/IBebidas";

const BebidasSchema = new mongoose.Schema({
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

    preco: {
        type: Number,
        required: [true, "Um preço é necessário para realizar o cadastro"],
    },

    descricao: {
        type: String,
        required: [true, "Uma descrição é necessária para realizar o cadastro"],
    },
    
    isActive: {
        type: Boolean,
        default: true
    },

    dataCriacao: {
        type: Date,
        default: Date.now
    },

    dataAtualizacao: {
        type: Date,
        default: Date.now
    },
},
{
    versionKey: false
}
);

const Bebidas = mongoose.model<IBebidas>("bebidas", BebidasSchema)

export default Bebidas;