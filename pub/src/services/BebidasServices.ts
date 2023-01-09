import Bebidas from "../models/Bebidas";
import { IBebidas } from "../interfaces/IBebidas";
import mongoose from "mongoose";

class BebidasServices {
    async post(bebida: IBebidas): Promise<IBebidas> {
        const novaBebida = new Bebidas(bebida);
        const result: IBebidas = await novaBebida.save();
        return result;
    }

    async get(): Promise<IBebidas[]> {
        const result: IBebidas[] | undefined = await Bebidas.find();
        if (result == undefined || result.length == 0)
            throw new Error("Não foi encontrado bebidas no banco");
        return result;
    }

    async getOne(id: string): Promise<IBebidas> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IBebidas | null = await Bebidas.findById(id);
        if (result == null)
            throw { status: 404, message: "Nenhuma bebida encontrada" };
        return result;
    }

    async delete(id: string): Promise<IBebidas> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IBebidas | null = await Bebidas.findByIdAndDelete(id);
        if (result == null)
            throw { status: 404, message: "Nenhuma bebida encontrada" };
        return result;
    }

    async put(id: string, bebida: IBebidas): Promise<IBebidas> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const novaBebida = new Bebidas(bebida);
        const result: IBebidas | null = await Bebidas.findOneAndUpdate(
            { _id: id },
            {
                nome: novaBebida.nome,
                foto: novaBebida.foto,
                descricao: novaBebida.descricao,
                preco: novaBebida.preco,
                dataAtualizacao: Date.now(),
            },
            { new: true }
        );

        if (result == null)
            throw {
                status: 400,
                message: "Não foi possível atualizar a bebida",
            };

        return result;
    }
}
export default BebidasServices;
