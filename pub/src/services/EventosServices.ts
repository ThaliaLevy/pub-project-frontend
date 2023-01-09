import Eventos from "../models/Eventos";
import { IEventos } from "../interfaces/IEventos";
import mongoose from "mongoose";
import { convertDate } from "../utils/converterParaDate";

class EventosServices {
    async post(evento: IEventos): Promise<IEventos> {
        evento.dataInicio = convertDate(String(evento.dataInicio));
        evento.dataFim = convertDate(String(evento.dataFim));
        const novoEvento = new Eventos(evento);
        const result: IEventos = await novoEvento.save();
        return result;
    }

    async get(): Promise<IEventos[]> {
        const result: IEventos[] | undefined = await Eventos.find();
        if (result == undefined || result.length == 0)
        throw new Error("Não foi encontrado eventos no banco");
        return result;
    }

    async getOne(id: string): Promise<IEventos> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IEventos | null = await Eventos.findById(id);
        if (result == null)
            throw { status: 404, message: "Nenhum evento encontrado" };
        return result;
    }

    async delete(id: string): Promise<IEventos> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IEventos | null = await Eventos.findByIdAndDelete(id);
        if (result == null)
            throw { status: 404, message: "Nenhum evento encontrado" };
        return result;
    }

    async put(id: string, evento: any): Promise<IEventos> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        evento.dataInicio = convertDate(evento.dataInicio);
        evento.dataFim = convertDate(evento.dataFim);
        const novoEvento = new Eventos(evento);
        const result: IEventos | null = await Eventos.findOneAndUpdate(
            { _id: id },
            {
                nome: novoEvento.nome,
                foto: novoEvento.foto,
                descricao: novoEvento.descricao,
                dataInicio: novoEvento.dataInicio,
                dataFim: novoEvento.dataFim,
                horaInicio: novoEvento.horaInicio,
                horaFim: novoEvento.horaFim,
                dataAtualizacao: Date.now(),
            },
            { new: true }
        );

        if (result == null)
        throw {
            status: 400,
            message: "Não foi possível atualizar o evento",
        };

    return result;
    }
}
export default EventosServices;
