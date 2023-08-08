import { Request, Response } from "express";

class Teste {
    public home(req: Request, res: Response) {
        res.json({
            message: "Deu bom"
        })
    }
}

export const teste = new Teste();