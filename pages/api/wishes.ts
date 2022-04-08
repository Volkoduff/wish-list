import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb"
import Wish from "../../models/wish";
const mongodbParams: string = 'mongodb+srv://db_user:Biosavar@cluster0.sq4au.mongodb.net/wishes?retryWrites=true&w=majority'

type ResponseData = {
    message: string,
    wishes: Wish[],
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    if (req.method === 'GET') {
        const client = await MongoClient.connect(mongodbParams);
        const db = client.db();

        const wishesCollection = db.collection('wishes-list');

        const wishesRaw = await wishesCollection.find().toArray(); 

        const wishes = wishesRaw.map((wish) => {
            return {
                id: wish._id.toString(),
                title: wish.title,
                category: wish.category,
                date: wish.date,
                description: wish.description,
            }
        })

        client.close();

        const resultJSON = {
            message: 'Список успешно загружен',
            wishes: wishes
        }
        
        res.status(200).json(resultJSON)
    }
}

export default handler;