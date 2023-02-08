const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://sidddd:WORTftddHVn0WuH3@cluster0.zo19hud.mongodb.net/?retryWrites=true&w=majority';

export default async (req, res) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db('test');
  const posts = db.collection('posts');

  switch (req.method) {
    case 'GET':
      const allPosts = await posts.find({}).toArray();
      res.status(200).json(allPosts);
      break;

    case 'POST':
      const { title, content } = req.body;
      await posts.insertOne({ title, content, createdAt: new Date() });
      res.status(201).end();
      break;

    default:
      return res.status(405).end();
  }
};
