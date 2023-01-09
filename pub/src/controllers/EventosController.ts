import { Request, Response } from "express";
import EventosServices from "../services/EventosServices";

class EventosController {
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const eventosService = new EventosServices();
            const result = await eventosService.get();
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const eventosService = new EventosServices();
            const result = await eventosService.getOne(id);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async post(req: Request, res: Response): Promise<Response> {
        try {
            const eventosService = new EventosServices();
            const result = await eventosService.post(req.body);
            return res
                .status(201)
                .json({ sucesso: `Evento ${result.nome}, salvo com sucesso` });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async put(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const eventosService = new EventosServices();
            const result = await eventosService.put(id, req.body);
            return res.status(200).json({
                sucesso: `Evento ${result.nome}, atualizado com sucesso`,
            });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const eventosService = new EventosServices();
            const result = await eventosService.delete(id);
            return res
                .status(200)
                .json({
                    sucesso: `Evento ${result.nome}, excluido com sucesso`,
                });
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }
}
export default EventosController;
