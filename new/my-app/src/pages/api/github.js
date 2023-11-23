
export default async function handler(req, res) {
    const githubUsername = 'siddharthd0'; 
    const token = process.env.GITHUB; 
  
    try {
      const commitsResponse = await fetch(`https://api.github.com/search/commits?q=author:${githubUsername}&sort=author-date&order=desc`, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.cloak-preview',
        }
      });
  
      const commitsData = await commitsResponse.json();
  
      if (commitsData.items && commitsData.items.length > 0) {
        const latestCommit = commitsData.items[0];
  
        const repoResponse = await fetch(latestCommit.repository.url, {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
          }
        });
        const repoData = await repoResponse.json();
  
        const response = {
          commitMessage: latestCommit.commit.message,
          commitUrl: latestCommit.html_url,
          repoName: repoData.name,
          repoUrl: repoData.html_url,
          repoStars: repoData.stargazers_count,
          commitDate: latestCommit.commit.author.date
        };
  
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: 'No commits found' });
      }
    } catch (error) {
      console.error('Error fetching commit data:', error);
      res.status(500).json({ error: 'Error fetching commit data' });
    }
  }
  