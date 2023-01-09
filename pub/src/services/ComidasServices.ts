import Comidas from "../models/Comidas";
import { IComidas } from "../interfaces/IComidas";
import mongoose from "mongoose";

class ComidasServices {
    async post(comida: IComidas): Promise<IComidas> {
        const novaComida = new Comidas(comida);
        const result: IComidas = await novaComida.save();
        return result;
    }

    async get(): Promise<IComidas[]> {
        const result: IComidas[] | undefined = await Comidas.find();
        if (result == undefined || result.length == 0)
            throw new Error("Não foi encontrada comidas no banco");
        return result;
    }

    async getOne(id: string): Promise<IComidas> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IComidas | null = await Comidas.findById(id);
        if (result == null)
            throw { status: 404, message: "Nenhuma comida encontrada" };
        return result;
    }

    async delete(id: string): Promise<IComidas> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IComidas | null = await Comidas.findByIdAndDelete(id);
        if (result == null)
            throw { status: 404, message: "Nenhuma comida encontrada" };
        return result;
    }

    async put(id: string, comida: IComidas): Promise<IComidas> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const novaComida = new Comidas(comida);
        const result: IComidas | null = await Comidas.findOneAndUpdate(
            { _id: id },
            {
                nome: novaComida.nome,
                foto: novaComida.foto,
                descricao: novaComida.descricao,
                preco: novaComida.preco,
                dataAtualizacao: Date.now(),
            },
            { new: true }
        );

        if (result == null)
            throw {
                status: 400,
                message: "Não foi possível atualizar a comida",
            };

        return result;
    }
}
export default ComidasServices;
