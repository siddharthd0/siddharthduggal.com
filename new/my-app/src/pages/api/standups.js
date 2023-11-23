// pages/api/submitStandup.js
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB);
    const db = client.db();

    const standupsCollection = db.collection("standups");
    const result = await standupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Standup inserted!" });
  }
}

export default handler;
