import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token
    const authToken = request.headers.authorization
    console.log(authToken);

    // Validar se o authToken está preenchido
    if (!authToken) {
        return response.status(401).json({message: "Token missing"});
    }

    const [,token] = authToken.split(" ")
    
    try {
        // Validar se o token é valido
        const { sub } = verify(token, "4f93ac9d10cb751b8c9c646bc9dbccb9") as IPayload;
        
        // Recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch (error) {
        return response.status(401).end();
    }
}