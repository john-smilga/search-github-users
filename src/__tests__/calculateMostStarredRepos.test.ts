// calculateMostStarredRepos.test.ts
import { describe, it, expect } from 'vitest';
import { calculateMostStarredRepos } from '../utils';
import { repositories } from '../testData';

describe('calculateMostStarredRepos', () => {
  it('should return the most starred repositories', () => {
    const result = calculateMostStarredRepos(repositories);
    expect(result).toEqual([
      { repo: 'Repo2', stars: 200 },
      { repo: 'Repo1', stars: 150 },
    ]);
  });

  it('should return an empty array if no repositories are provided', () => {
    const result = calculateMostStarredRepos([]);
    expect(result).toEqual([]);
  });

  it('should handle repositories with zero stars', () => {
    const zeroStarsRepo = [
      {
        name: 'Repo3',
        description: 'This is a repository with zero stars',
        stargazerCount: 0,
        forkCount: 10,
        url: 'https://github.com/user/repo3',
        languages: {
          edges: [
            { node: { name: 'C++' }, size: 3000 },
            { node: { name: 'Rust' }, size: 2000 },
          ],
        },
      },
    ];
    const result = calculateMostStarredRepos(zeroStarsRepo);
    expect(result).toEqual([{ repo: 'Repo3', stars: 0 }]);
  });
});
