const GITHUB_API_BASE = 'https://api.github.com';

class GitHubService {
  constructor(username) {
    this.username = username;
  }

  async getUser() {
    try {
      const response = await fetch(`${GITHUB_API_BASE}/users/${this.username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  }

  async getRepositories(limit = 6) {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/users/${this.username}/repos?sort=updated&per_page=${limit}&type=owner`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const repos = await response.json();
      
      // Filter out forks and add additional data
      return repos
        .filter(repo => !repo.fork)
        .map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          updated_at: repo.updated_at,
          topics: repo.topics || [],
          size: repo.size,
          default_branch: repo.default_branch
        }));
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  }

  async getRepositoryLanguages(repoName) {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/repos/${this.username}/${repoName}/languages`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch repository languages');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching repository languages:', error);
      return {};
    }
  }

  async getRepositoryReadme(repoName) {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/repos/${this.username}/${repoName}/readme`
      );
      if (!response.ok) {
        return null;
      }
      const readme = await response.json();
      // Decode base64 content
      return atob(readme.content.replace(/\n/g, ''));
    } catch (error) {
      console.error('Error fetching repository README:', error);
      return null;
    }
  }
}

// Replace 'your-github-username' with your actual GitHub username
export default new GitHubService('Vicki0111');