import { Repository } from './types';

export const calculatePopularLanguages = (repositories: Repository[]) => {
  const languageMap: { [key: string]: number } = {};

  repositories.forEach((repo) => {
    repo.languages.edges.forEach((language) => {
      const { name } = language.node;

      if (languageMap[name]) {
        languageMap[name] += 1;
      } else {
        languageMap[name] = 1;
      }
    });
  });

  return Object.entries(languageMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([language, count]) => ({ language, count }));
};

export const calculateMostForkedRepos = (
  repositories: Repository[]
): { repo: string; count: number }[] => {
  const forkedRepos = repositories
    .map((repo) => ({
      repo: repo.name,
      count: repo.forkCount,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return forkedRepos;
};

export const calculateMostStarredRepos = (
  repositories: Repository[]
): { repo: string; stars: number }[] => {
  const starredRepos = repositories
    .map((repo) => ({
      repo: repo.name,
      stars: repo.stargazerCount,
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);

  return starredRepos;
};
