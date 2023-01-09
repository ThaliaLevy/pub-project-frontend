import { Request, Response } from "express";
import BebidasServices from "../services/BebidasServices";

class BebidasController {
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const bebidasService = new BebidasServices();
            const result = await bebidasService.get();
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const bebidasService = new BebidasServices();
            const result = await bebidasService.getOne(id);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async post(req: Request, res: Response): Promise<Response> {
        try {
            const bebidasService = new BebidasServices();
            const result = await bebidasService.post(req.body);
            return res
            .status(201)
            .json({ sucesso: `Bebida ${result.nome}, salva com sucesso` });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async put(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const bebidasService = new BebidasServices();
            const result = await bebidasService.put(id, req.body);
            return res.status(200).json({
              sucesso: `Bebida ${result.nome}, atualizada com sucesso`,
          });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const bebidasService = new BebidasServices();
            const result = await bebidasService.delete(id);
            return res.status(200).json({sucesso: `Bebida ${result.nome}, excluida com sucesso`});
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }
}
export default BebidasController;
