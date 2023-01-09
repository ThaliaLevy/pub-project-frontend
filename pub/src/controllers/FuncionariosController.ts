import { Request, Response } from "express";
import FuncionariosServices from "../services/FuncionariosServices";

class FuncionariosController {
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const FuncionarioService = new FuncionariosServices();
            const result = await FuncionarioService.get();
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const FuncionarioService = new FuncionariosServices();
            const result = await FuncionarioService.getOne(id);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async post(req: Request, res: Response): Promise<Response> {
        try {
            const FuncionarioService = new FuncionariosServices();
            const result = await FuncionarioService.post(req.body);
            return res
                .status(200)
                .json(`Funcionário ${result.nome} cadastrado com sucesso`);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async put(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const FuncionarioService = new FuncionariosServices();
            const result = await FuncionarioService.put(id, req.body);
            return res.status(200).json({
              sucesso: `Funcionário ${result.nome}, atualizado com sucesso`,
          });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const FuncionarioService = new FuncionariosServices();
            const result = await FuncionarioService.delete(id);
            return res.status(200).json({sucesso: `Funcionário ${result.nome}, excluido com sucesso`});
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }
}
export default FuncionariosController;
