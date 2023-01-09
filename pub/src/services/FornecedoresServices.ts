import Fornecedores from "../models/Fornecedores";
import { IFornecedores } from "../interfaces/IFornecedores";
import mongoose from "mongoose";

class FornecedoresServices {
    async post(fornecedor: IFornecedores): Promise<IFornecedores> {
        const novoFornecedor: IFornecedores = new Fornecedores(fornecedor);
        const result: IFornecedores = await novoFornecedor.save();
        return result;
    }

    async get(): Promise<IFornecedores[]> {
        const result: IFornecedores[] | undefined = await Fornecedores.find();
        if (result == undefined || result.length == 0)
            throw new Error("Não foi encontrado fornecedores no banco");
        return result;
    }

    async getOne(id: string): Promise<IFornecedores> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IFornecedores | null = await Fornecedores.findById(id);
        if (result == null)
            throw { status: 404, message: "Nenhum usuário encontrado" };
        return result;
    }

    async delete(id: string): Promise<IFornecedores> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IFornecedores | null =
            await Fornecedores.findByIdAndDelete(id);
        if (result == null)
            throw { status: 404, message: "Nenhum usuário encontrado" };
        return result;
    }

    async put(id: string, fornecedor: IFornecedores): Promise<IFornecedores> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const novoFornecedor = new Fornecedores(fornecedor);
        const result: IFornecedores | null =
            await Fornecedores.findOneAndUpdate(
                { _id: id },
                {
                    nome: novoFornecedor.nome,
                    foto: novoFornecedor.foto,
                    descricao: novoFornecedor.descricao,
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
export default FornecedoresServices;
