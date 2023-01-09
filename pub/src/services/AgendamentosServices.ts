import mongoose from "mongoose";
import { IAgendamentos } from "../interfaces/IAgendamentos";
import { IEventos } from "../interfaces/IEventos";
import { IUsuarios } from "../interfaces/IUsuarios";
import Agendamentos from "../models/Agendamentos";
import Eventos from "../models/Eventos";
import Usuarios from "../models/Usuarios";
import { convertDate } from "../utils/converterParaDate";

class AgendamentosServices {
    async agendar(agendamento: any): Promise<IAgendamentos> {
        let isValidUsuario = mongoose.Types.ObjectId.isValid(
            agendamento.idUsuario
        );
        if (!isValidUsuario)
            throw { status: 400, message: "Id do usuário inválido" };
        let isValidEvento = mongoose.Types.ObjectId.isValid(
            agendamento.idEvento
        );
        if (!isValidEvento)
            throw { status: 400, message: "Id do evento inválido" };

        const usuario: IUsuarios | null = await Usuarios.findById(
            agendamento.idUsuario
        );
        if (usuario == null) throw { status: 400, message: "Usuário não encontrado" };

        const evento: IEventos | null = await Eventos.findById(
            agendamento.idEvento
        );

        if (evento == null) throw { status: 400, message: "Evento não encontrado" };

        agendamento.data = convertDate(agendamento.data);
        agendamento.nomeUsuario = usuario.nome
        agendamento.nomeEvento = evento.nome

        const AgendamentoSalvar = new Agendamentos(agendamento);

        const result: IAgendamentos | null =
            await AgendamentoSalvar.save();

        return result;
    }

    async getAll(): Promise<IAgendamentos[]> {
        const result: IAgendamentos[] | undefined = await Agendamentos.find();
        if (result == undefined || result.length == 0)
            throw new Error("Não foi encontrado agendamentos no banco");
        return result;
    }

    async getByIdUsuario(id: string): Promise<IAgendamentos[]> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IAgendamentos[] | undefined = await Agendamentos.find({
            idUsuario: id,
        });
        if (result == undefined)
            throw { status: 404, message: "Nenhum agendamento encontrado para esse usuário" };
        return result;
    }

    async getByIdEvento(id: string): Promise<IAgendamentos[]> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IAgendamentos[] | undefined = await Agendamentos.find({
            idEvento: id,
        });
        if (result == undefined || result.length == 0)
            throw { status: 404, message: "Nenhum agendamento encontrado para esse evento" };
        return result;
    }

    async getByDay(dataString: string): Promise<IAgendamentos[]> {
        const dataConvertida = convertDate(dataString);
        const result: IAgendamentos[] | undefined = await Agendamentos.find({
            data: dataConvertida,
        });
        if (result == undefined || result.length == 0)
            throw { status: 404, message: "Nenhum agendamento encontrado para esse dia" };
        return result;
    }

    async getByHour(horario: string): Promise<IAgendamentos[]> {
        const result: IAgendamentos[] | undefined = await Agendamentos.find({
            hora: horario,
        });
        if (result == undefined || result.length == 0)
            throw { status: 404, message: "Nenhum agendamento encontrado para esse horário" };
        return result;
    }

    async put(
        data: string,
        hora: string,
        idAgendamento: string
    ): Promise<IAgendamentos> {
        const dataConvertida = convertDate(data);
        const result: IAgendamentos | null =
            await Agendamentos.findByIdAndUpdate(
                { _id: idAgendamento },
                {
                    data: dataConvertida,
                    hora: hora,
                },
                { new: true }
            );

            if (result == null)
            throw {
                status: 400,
                message: "Não foi possível atualizar o agendamento",
            };

        return result;
    }

    async delete(id: string): Promise<IAgendamentos> {
        let isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw { status: 400, message: "Id inválido" };
        const result: IAgendamentos | null = await Agendamentos.findByIdAndDelete(id);
        if (result == null)
            throw { status: 404, message: "Nenhum agendamento encontrado" };
        return result;
    }
}
export default AgendamentosServices;
