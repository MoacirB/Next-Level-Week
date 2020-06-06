import knex from '../database/connection';
import { Request, Response } from 'express';//Não precisa importar?

class ItemsController {
    async index(req: Request, res: Response){
        const items = await knex('items').select('*');

    const serializedItems = items.map( (item)=>{
        return {
            id: item.id,
            title: item.title,
            //image: `http://localhost:3333/uploads/${item.image}`,
            image: `http://192.168.0.29:3333/uploads/${item.image}`//Para rodar com expo
        }
    })
    return res.json(serializedItems);
    }
}

export default ItemsController;