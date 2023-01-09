import { Request, Response } from "express";
import FornecedoresServices from "../services/FornecedoresServices";

class FornecedoresController {
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const fornecedoresService = new FornecedoresServices();
            const result = await fornecedoresService.get();
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const fornecedoresService = new FornecedoresServices();
            const result = await fornecedoresService.getOne(id);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async post(req: Request, res: Response): Promise<Response> {
        try {
            const fornecedoresService = new FornecedoresServices();
            const result = await fornecedoresService.post(req.body);
            return res.status(201).json({
                sucesso: `Fornecedor ${result.nome}, salvo com sucesso`,
            });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async put(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const fornecedoresService = new FornecedoresServices();
            const result = await fornecedoresService.put(id, req.body);
            return res.status(200).json({
                sucesso: `Fornecedor ${result.nome}, atualizado com sucesso`,
            });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const fornecedoresService = new FornecedoresServices();
            const result = await fornecedoresService.delete(id);
            return res
                .status(200)
                .json({
                    sucesso: `Fornecedor ${result.nome}, excluido com sucesso`,
                });
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }
}
export default FornecedoresController;
