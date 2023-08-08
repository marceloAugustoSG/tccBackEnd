import { Request, Response, Router } from "express";
import { teste } from "../controllers/teste.controller";

const router: Router = Router();

router.get('/', teste.home)

export { router };