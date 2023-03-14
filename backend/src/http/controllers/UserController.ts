import { Request, Response } from "express";

export class UserController{
    async hello(req: Request, res: Response){
        return res.status(200).json({msg:"Hello world"});
    }
}