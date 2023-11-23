
export default async function handler(req, res) {
    try {
      const response = await fetch("http://worldtimeapi.org/api/timezone/America/Denver");
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching time:", error);
      res.status(500).json({ message: "Error fetching time" });
    }
  }
  