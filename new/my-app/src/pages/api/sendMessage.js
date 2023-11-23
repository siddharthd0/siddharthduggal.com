// pages/api/sendMessage.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const webhookUrl = process.env.DISCORD;
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(req.body),
        });
  
        if (!response.ok) {
          throw new Error(`Webhook responded with status ${response.status}`);
        }
  
        res.status(200).json({ message: 'Message sent successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  }
  