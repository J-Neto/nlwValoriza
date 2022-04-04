import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    
    // Recuperando id do usuário
    const { user_id } = request;

    const usersRepositories = getCustomRepository(UsersRepositories);
    
    // Verificando se ele existe
    const { admin } = await usersRepositories.findOne(user_id);

    // Verificar se o usuario é admin
    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unathourized",
    });
}