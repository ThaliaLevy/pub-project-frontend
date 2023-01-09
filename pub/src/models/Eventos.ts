import mongoose from "mongoose";
import { IEventos } from "../interfaces/IEventos";

const EventosSchema = new mongoose.Schema({
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

    descricao: {
        type: String,
        required: [true, "Uma descrição é necessária para realizar o cadastro"],
    },

    dataInicio: {
        type: Date,
        required: [true, "Uma data de inicio é necessária para realizar o cadastro"]
    },

    dataFim: {
        type: Date,
        required: [true, "Uma data de fim é necessária para realizar o cadastro"]
    },

    horaInicio: {
        type: String,
        required: [true, "Uma hora de inicio é necessária para realizar o cadastro"]
    },

    horaFim: {
        type: String,
        required: [true, "Uma hora de fim é necessária para realizar o cadastro"]
    },

    agendados: {
        type: Array,
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

const Eventos = mongoose.model<IEventos>("eventos", EventosSchema)

export default Eventos;