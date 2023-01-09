import Funcionarios from "../models/Funcionarios";
import { IFuncionarios } from "../interfaces/IFuncionarios";
import mongoose from "mongoose";

class FuncionariosServices {
    async post(funcionario: IFuncionarios): Promise<IFuncionarios> {
        const novoFuncionario = new Funcionarios(funcionario);
        const result: IFuncionarios = await novoFuncionario.save();
        return result;
    }

    async get(): Promise<IFuncionarios[]> {
        const result: IFuncionarios[] | undefined = await Funcionarios.find();
        if (result == undefined || result.length == 0)
            throw new Error("Não foi encontrado funcionários no banco");
        return result;
    }

    async getOne(id: string): Promise<IFuncionarios> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IFuncionarios | null = await Funcionarios.findById(id);
        if (result == null)
            throw { status: 404, message: "Nenhum funcionário encontrado" };
        return result;
    }

    async delete(id: string): Promise<IFuncionarios> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IFuncionarios | null =
            await Funcionarios.findByIdAndDelete(id);
        if (result == null)
            throw { status: 404, message: "Nenhum funcionário encontrado" };
        return result;
    }

    async put(id: string, funcionario: IFuncionarios): Promise<IFuncionarios> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const novoFuncionario = new Funcionarios(funcionario);
        const result: IFuncionarios | null =
            await Funcionarios.findOneAndUpdate(
                { _id: id },
                {
                    nome: novoFuncionario.nome,
                    idade: novoFuncionario.idade,
                    foto: novoFuncionario.foto,
                    cargo: novoFuncionario.cargo,
                    naturalidade: novoFuncionario.naturalidade,
                    anoAdmissao: novoFuncionario.anoAdmissao,
                    hobbie: novoFuncionario.hobbie,
                    dataAtualizacao: Date.now(),
                },
                { new: true }
            );
        if (result == null)
            throw {
                status: 400,
                message: "Não foi possível atualizar o funcionário",
            };
        return result;
    }
}
export default FuncionariosServices;
