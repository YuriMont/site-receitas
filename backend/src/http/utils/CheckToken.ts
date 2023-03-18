import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken"

export function checkToken(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(404).json({msg: "Acesso negado"});
    }

    try{
        jsonwebtoken.verify(token, String(process.env.SECRET));

        next();
    }catch(error){
        res.status(400).json({msg: "Token inválido"})
    }
}