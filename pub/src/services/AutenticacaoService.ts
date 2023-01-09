import bcrypt from 'bcrypt';
import { sign } from "jsonwebtoken";
import { IAutenticacao } from "../interfaces/IAutenticacao";
import Usuarios from "../models/Usuarios";
import {IUsuarios} from '../interfaces/IUsuarios'
require('dotenv').config();

class AutenticacaoService {
  async autenticacao(autenticacao: IAutenticacao): Promise<{token: string} | string> {
      const { email, senha } = autenticacao;
  
      const UsuarioExiste: IUsuarios | null = await Usuarios.findOne({email: email})

      if (UsuarioExiste?.email == undefined || UsuarioExiste?.senha == undefined) throw { status: 400, message: "Email ou senha inválida" };
      
      const comparaSenha = await bcrypt.compare(senha, UsuarioExiste?.senha);

      if (!comparaSenha) throw { status: 401, message: "Acesso negado. Usuário ou senha incorreto" };
      
      const token = sign({claim: UsuarioExiste.isAdmin}, String(process.env.CREDENCIAL_JWT), {
        subject: String(UsuarioExiste._id),
        expiresIn: "1h",
      });

      if(token == undefined) throw { status: 400, message: "Problema ao gerar o token" };

      return {token: token}
  }
}
export default AutenticacaoService;
