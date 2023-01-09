import { Request, Response } from "express";
import ComidasServices from "../services/ComidasServices";

class ComidasController {
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const comidaService = new ComidasServices();
            const result = await comidaService.get();
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const comidaService = new ComidasServices();
            const result = await comidaService.getOne(id);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async post(req: Request, res: Response): Promise<Response> {
        try {
            const comidaService = new ComidasServices();
            const result = await comidaService.post(req.body);
            return res
                .status(201)
                .json({ sucesso: `Comida ${result.nome}, salva com sucesso` });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async put(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const comidaService = new ComidasServices();
            const result = await comidaService.put(id, req.body);
            return res.status(200).json({
              sucesso: `Comida ${result.nome}, atualizada com sucesso`,
          });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const comidaService = new ComidasServices();
            const result = await comidaService.delete(id);
            return res.status(200).json({sucesso: `Comida ${result.nome}, excluida com sucesso`});
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }
}
export default ComidasController;
