import { Router } from "express";
import SpentController from "../controllers/SpentController";
const routes = Router();

routes.post('/',SpentController.create);

export default routes;