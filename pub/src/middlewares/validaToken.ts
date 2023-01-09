import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import jwtDecode from "jwt-decode";

export function validacaoAdmin(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            erro: "Token não encontrado"
        })
    }

    const [, token] = authToken.split(" ");
    const decode = jwtDecode<JwtPayload>(token)

    try {
        verify(token, String(process.env.CREDENCIAL_JWT));
        if(decode.claim == true) return next();
        throw new Error("Token inválido, permissão apenas para administradores")
    } catch (error: any) {
        return response.status(401).json({
            erro: error.message
        })
    }
}

export function validacaoGeral(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            erro: "Token não encontrado"
        })
    }

    const [, token] = authToken.split(" ");

    try {
        verify(token, String(process.env.CREDENCIAL_JWT));
        return next();
        
    } catch (error: any) {
        return response.status(401).json({
            erro: error.message
        })
    }
}