import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb"
import Wish from "../../models/wish";
const mongodbParams: string = 'mongodb+srv://db_user:Biosavar@cluster0.sq4au.mongodb.net/wishes?retryWrites=true&w=majority'

type ResponseData = {
    message: string,
    newWish: Wish,
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    if (req.method === 'POST') {
        const data = req.body;
        // Добавляем дату на сервере
        data.date = new Date().toISOString();

        const client = await MongoClient.connect(mongodbParams);
        const db = client.db();

        const wishesCollection = db.collection('wishes-list');
        const {insertedId} = await wishesCollection.insertOne(data);
        const newWishRaw = await wishesCollection.findOne({_id: new ObjectId(insertedId)});

        const newWish = {
            id: newWishRaw!._id.toString(),
            title: newWishRaw?.title,
            category: newWishRaw?.category,
            description: newWishRaw?.description,
            date: newWishRaw?.date,
        }

        client.close();

        const resultJSON = {
            message: 'Message about from back',
            newWish
        }

        res.status(201).json(resultJSON)
    }
}

export default handler;