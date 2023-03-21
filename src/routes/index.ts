import { Router, Request, Response } from "express";
import { Login, UserController } from "../controllers"
import  User  from "./User";
import spent from "./spent";

const routes = Router()

routes.post("/login", UserController.login);
routes.use('/user',User)
routes.use("/spent",spent)

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;
