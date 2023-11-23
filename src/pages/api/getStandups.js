// pages/api/getStandups.js
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(process.env.MONGODB);
    const db = client.db();

    const standupsCollection = db.collection('standups');
    const standups = await standupsCollection.find().toArray();

    client.close();

    res.status(200).json({ standups });
  }
}

export default handler;
