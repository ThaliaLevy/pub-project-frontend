import Usuarios from "../models/Usuarios";
import { IUsuarios } from "../interfaces/IUsuarios";
import mongoose from "mongoose";
import { hashSenha } from "../utils/hashSenha";
import { validaCPF } from "../utils/validaCpf";
import { validaEmail } from "../utils/validaEmail";
import AgendamentosServices from "./AgendamentosServices";


class UsuariosServices {
    async post(usuario: IUsuarios): Promise<IUsuarios> {
        const cpfValido = validaCPF(usuario.cpf)
        if(!cpfValido) throw { status: 400, message: "CPF inválido" };
        const emailExiste = await validaEmail(usuario.email)
        if(!emailExiste) throw { status: 400, message: "Email já cadastrado" };
        const novoUsuario = new Usuarios(usuario);
        const result: IUsuarios = await novoUsuario.save();
        return result;
    }

    async get(): Promise<IUsuarios[]> {
        const result: IUsuarios[] | undefined = await Usuarios.find();
        if (result == undefined || result.length == 0)
            throw new Error("Não foi encontrado usuários no banco");
        return result;
    }

    async getOne(id: string): Promise<IUsuarios> {
        const agendamentosServices = new AgendamentosServices()
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IUsuarios | null = await Usuarios.findById(id);
        if (result == null)
            throw { status: 404, message: "Nenhum usuário encontrado" };
        const eventosAgendados = await agendamentosServices.getByIdUsuario(id)
        result.eventos?.push(eventosAgendados)
        return result;
    }

    async delete(id: string): Promise<IUsuarios> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IUsuarios | null = await Usuarios.findByIdAndDelete(id);
        if (result == null)
            throw { status: 404, message: "Nenhum usuário encontrado" };
        return result;
    }

    async put(id: string, usuario: IUsuarios): Promise<IUsuarios> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const cpfValido = usuario.cpf != null ? validaCPF(usuario.cpf) : true;
        if(!cpfValido) throw { status: 400, message: "CPF inválido" };
        const emailExiste = usuario.email != null ? await validaEmail(usuario.email) : true
        if(!emailExiste) throw { status: 400, message: "Email já cadastrado" };
        const novoUsuario = new Usuarios(usuario);
        const hash = novoUsuario.senha ? await hashSenha(novoUsuario.senha) : 400;

        if (hash != 400) {
            novoUsuario.senha = hash;
        }

        const result: IUsuarios | null = await Usuarios.findByIdAndUpdate(
            { _id: id },
            {
                nome: novoUsuario.nome,
                cpf: novoUsuario.cpf,
                telefone: novoUsuario.telefone,
                email: novoUsuario.email,
                senha: novoUsuario.senha,
                dataAtualizacao: Date.now(),
            },
            { new: true }
        );

        if (result == null)
            throw {
                status: 400,
                message: "Não foi possível atualizar o usuário",
            };

        return result;
    }

    async putAdmin(id: string, usuario: IUsuarios): Promise<IUsuarios> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IUsuarios | null = await Usuarios.findOneAndUpdate(
            { _id: id },
            {
                isAdmin: usuario.isAdmin,
                dataAtualizacao: Date.now(),
            },
            { new: true }
        );

        if (result == null)
            throw {
                status: 400,
                message: "Não foi possível atualizar o usuário",
            };

        return result;
    }
}
export default UsuariosServices;

