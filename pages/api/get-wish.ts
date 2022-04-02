import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb"
const mongodbParams: string = 'mongodb+srv://db_user:Biosavar@cluster0.sq4au.mongodb.net/wishes?retryWrites=true&w=majority'

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<any>
) => {
    if (req.method === "GET") {
        const id = req.body;
        const client = await MongoClient.connect(mongodbParams);
        const db = client.db();

        const wishesCollection = db.collection('wishes-list');
        const wish = await wishesCollection.findOne({_id: new ObjectId(id)});

        client.close();

        const resultJSON = {
            message: 'Ok',
            wish
        }

        res.status(201).json(resultJSON)
    }
}