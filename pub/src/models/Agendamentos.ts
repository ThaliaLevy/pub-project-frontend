import mongoose from "mongoose";
import { IAgendamentos } from "../interfaces/IAgendamentos";

const AgendamentosSchema = new mongoose.Schema({
    id: {
        type: String,
    },

    idUsuario: {
        type: String,
        required: [true, "Um id de usuário é necessário para realizar o cadastro"],
    },

    nomeUsuario: {
        type: String,
    },

    idEvento: {
        type: String,
        required: [true, "Um id de evento é necessário para realizar o cadastro"],
    },

    nomeEvento: {
        type: String,
    },

    data: {
        type: Date,
        required: [true, "Uma data é necessária para realizar o cadastro"],
    },

    hora: {
        type: String,
        required: [true, "Um horário é necessário para realizar o cadastro"],
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

const Agendamentos = mongoose.model<IAgendamentos>("agendamentos", AgendamentosSchema)

export default Agendamentos;