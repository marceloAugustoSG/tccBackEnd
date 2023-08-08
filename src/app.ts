import express from "express";
import { router } from "./routes/routes"

export class App {
    public serve: express.Application;

    constructor() {
        this.serve = express();
        this.router();
    }

    public router() {
        this.serve.use(router)

    }

}