import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IUsuarios } from "../interfaces/IUsuarios";

const UsuariosSchema = new mongoose.Schema(
    {
        id: {
            type: String,
        },

        nome: {
            type: String,
            required: [true, "Um nome é necessário para realizar o cadastro"],
        },

        isAdmin: {
            type: Boolean,
            default: false,
        },

        cpf: {
            type: String,
            required: [true, "Um cpf é necessário para realizar o cadastro"],
        },

        telefone: {
            type: String,
            default: "00000000000",
        },

        email: {
            type: String,
            required: [true, "Um email é necessário para realizar o cadastro"],
            lowercase: true,
        },

        senha: {
            type: String,
            required: [true, "Uma senha é necessária para realizar o cadastro"],
        },

        eventos: {
            type: Array,
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        dataCriacao: {
            type: Date,
            default: Date.now(),
        },

        dataAtualizacao: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        versionKey: false,
    }
);

UsuariosSchema.pre("save", async function (next) {
    if (this.isModified("senha")) {
        const hash = await bcrypt.hash(this.senha, 8);
        this.senha = hash;
        next();
    }
});

const Usuarios = mongoose.model<IUsuarios>("usuarios", UsuariosSchema);

export default Usuarios;
