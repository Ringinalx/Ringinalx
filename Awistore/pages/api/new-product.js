import { MongoClient } from 'mongodb';



//POST /api/ products
///api/ product

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Ibro4realx:Mezozoyozi5@cluster0.firp8.mongodb.net/Products?retryWrites=true&w=majority');
        const db = client.db();

        const productCollection = db.collection('products');

        const result = await productCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({ message: 'Product created!' });
    }

}


export default handler;