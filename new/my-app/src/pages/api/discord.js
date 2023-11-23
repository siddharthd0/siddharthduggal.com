
export default async function handler(req, res) {
  const botToken = process.env.DISCORD_BOT_TOKEN;
  const userId = '910659572199464990';

  try {
    const response = await fetch(`https://discord.com/api/users/${userId}`, {
      headers: { Authorization: `Bot ${botToken}` },
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(`HTTP error! Status: ${response.status}, ${errorData.message}`);
    }

    const data = await response.json();
    console.log('Discord data:', data);
    const vscodeActivity = data.activities?.find(activity => activity.name === 'Visual Studio Code');
    res.status(200).json({ vscodeActivity: vscodeActivity || null });
  } catch (error) {
    console.error('Error fetching Discord data:', error.message);
    res.status(500).json({ message: 'Error fetching Discord data', error: error.message });
  }
}
