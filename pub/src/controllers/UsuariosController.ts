import { Request, Response } from "express";
import UsuariosServices from "../services/UsuariosServices";

class UsuariosController {
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const usuarioService = new UsuariosServices();
            const result = await usuarioService.get();
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const usuarioService = new UsuariosServices();
            const result = await usuarioService.getOne(id);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }

    async post(req: Request, res: Response): Promise<Response> {
        try {
            const usuarioService = new UsuariosServices();
            const result = await usuarioService.post(req.body);
            return res
                .status(201)
                .json({ sucesso: `Usuário ${result.nome}, salvo com sucesso` });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async put(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const usuarioService = new UsuariosServices();
            const result = await usuarioService.put(id, req.body);
            return res.status(200).json({
                sucesso: `Usuário ${result.nome}, atualizado com sucesso`,
            });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async putAdmin(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const usuarioService = new UsuariosServices();
            const result = await usuarioService.putAdmin(id, req.body);
            return res.status(200).json({
                sucesso: `Usuário ${result.nome}, agora tem privilégios de administrador`,
            });
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id: string = req.params.id;
            const usuarioService = new UsuariosServices();
            const result = await usuarioService.delete(id);
            return res.status(200).json({sucesso: `Usuário ${result.nome}, excluido com sucesso`});
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }
}
export default UsuariosController;
