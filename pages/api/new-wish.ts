import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb"
const mongodbParams: string = 'mongodb+srv://db_user:Biosavar@cluster0.sq4au.mongodb.net/wishes?retryWrites=true&w=majority'

type ResponseData = {
    message: string,
    newId: string | ObjectId,
}

interface ApiProps {
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
}

// const handler = async ({req, res}: ApiProps) => {
const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, category, description, datenpm } = data;

        const client = await MongoClient.connect(mongodbParams);

        const db = client.db();

        const wishesCollection = db.collection('wishes-list');

        const {insertedId} = await wishesCollection.insertOne(data);
        console.log(insertedId)

        client.close();

        const resultJSON = {
            message: 'Message about from back',
            newId: insertedId
        }

        res.status(201).json(resultJSON)
    }
}

export default handler;