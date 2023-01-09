import { Request, Response } from "express";
import AgendamentosServices from "../services/AgendamentosServices";

class AgendamentosController {
    async post(req: Request, res: Response): Promise<Response> {
        try {
            const agendamentosServices = new AgendamentosServices();
            const result = await agendamentosServices.agendar(req.body);
            return res
                .status(201)
                .json({ sucesso: `Agendamento na data: ${result.data} hora: ${result.hora}, salvo com sucesso` });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const agendamentosServices = new AgendamentosServices();
            const result = await agendamentosServices.getAll();
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getByIdUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const agendamentosServices = new AgendamentosServices();
            const idUsuario = String(req.params.id);
            const result = await agendamentosServices.getByIdUsuario(idUsuario);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async getByIdEvento(req: Request, res: Response): Promise<Response> {
        try {
            const agendamentosServices = new AgendamentosServices();
            const idEvento = String(req.params.id);
            const result = await agendamentosServices.getByIdEvento(idEvento);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async getByDayEvento(req: Request, res: Response): Promise<Response> {
        try {
            const agendamentosServices = new AgendamentosServices();
            const data: string | undefined = String(req.query.data);
            if(data == undefined) throw ({status: 404, message: "Uma data deve ser passada como query"})
            const result = await agendamentosServices.getByDay(data);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async getByHour(req: Request, res: Response): Promise<Response> {
        try {
            const agendamentosServices = new AgendamentosServices();
            const hora: string | undefined = String(req.query.hora);
            if(hora == undefined) throw ({status: 404, message: "Um horário deve ser passado como query"})
            const result = await agendamentosServices.getByHour(hora);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async put(req: Request, res: Response): Promise<Response> {
        try {
            const agendamentosServices = new AgendamentosServices();
            const id = String(req.params.id);
            const { data, hora } = req.body;
            const result = await agendamentosServices.put(data, hora, id);
            return res.status(200).json({
                sucesso: `O agendamento da data ${result.data}, foi atualizado com sucesso`,
            });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const agendamentosServices = new AgendamentosServices();
            const result = await agendamentosServices.delete(id);
            return res.status(200).json({
                sucesso: `O agendamento da data ${result.data}, foi excluido com sucesso`,
            });
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }
}
export default AgendamentosController;
