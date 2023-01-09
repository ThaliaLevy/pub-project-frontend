import { Request, Response } from "express";
import AutenticacaoService from "../services/AutenticacaoService";

class AutenticacaoController {
    async post(req: Request, res: Response): Promise<Response> {
        try {
            const autenticacaoService = new AutenticacaoService();
            const result = await autenticacaoService.autenticacao(req.body);
            return res
                .status(201)
                .json({ sucesso: `Usuário logado com sucesso`, result });
        } catch (error: any) {
            return res.status(error.status).json({ erro: error.message });
        }
    }
}
export default AutenticacaoController;
