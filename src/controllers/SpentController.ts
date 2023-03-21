import { Request, Response } from 'express';
import AppDataSource from '../data-source';
import { Spent } from '../entities/Spenet';
import { User } from '../entities/User';


class SpentController {

    public async create(req: Request, res: Response): Promise<Response> {
        const { description, value} = req.body;
        const {id} = res.locals;
        const user:any =await AppDataSource.manager.findOneBy(User,{id});
        const spent = new Spent();
        spent.description = description;
        spent.value = value;
        spent.user = user;
        await AppDataSource.manager.save(Spent, spent);
        return res.json({spent});
    }

}

export default new SpentController()