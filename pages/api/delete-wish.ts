import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb"
const mongodbParams: string = 'mongodb+srv://db_user:Biosavar@cluster0.sq4au.mongodb.net/wishes?retryWrites=true&w=majority'

type ResponseData = {
    message: string,
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    if (req.method === 'DELETE') {
        const id = req.body;
        const client = await MongoClient.connect(mongodbParams);
        const db = client.db();
        const wishesCollection = db.collection('wishes-list');

        const result = await wishesCollection.deleteOne({_id: new ObjectId(id)})
        client.close();

        const resultJSON = {
            message: 'Успешно удалено ' + result.deletedCount + 'шт.',
            deleteItemId: id,
        }

        res.status(200).json(resultJSON)
    }
}

export default handler;