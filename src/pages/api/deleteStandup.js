import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const number = req.query.number;

    const client = await MongoClient.connect(process.env.MONGODB);
    const db = client.db();

    const standupsCollection = db.collection("standups");
    await standupsCollection.deleteOne({ number: parseInt(number) });

    client.close();

    res.status(200).json({ message: "Standup deleted!" });
  }
}

export default handler;
