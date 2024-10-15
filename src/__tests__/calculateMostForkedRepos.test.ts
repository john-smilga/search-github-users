import { describe, it, expect } from 'vitest';
import { calculateMostForkedRepos } from '../utils';
import { repositories } from '../testData';

describe('calculateMostForkedRepos', () => {
  it('should return the most forked repositories', () => {
    const result = calculateMostForkedRepos(repositories);
    expect(result).toEqual([
      { repo: 'Repo2', count: 50 },
      { repo: 'Repo1', count: 30 },
    ]);
  });

  it('should return an empty array if no repositories are provided', () => {
    const result = calculateMostForkedRepos([]);
    expect(result).toEqual([]);
  });

  it('should handle repositories with zero forks', () => {
    const zeroForksRepo = [
      {
        name: 'Repo4',
        description: 'This is a repository with zero forks',
        stargazerCount: 50,
        forkCount: 0,
        url: 'https://github.com/user/repo4',
        languages: {
          edges: [
            { node: { name: 'C++' }, size: 3000 },
            { node: { name: 'Rust' }, size: 2000 },
          ],
        },
      },
    ];
    const result = calculateMostForkedRepos(zeroForksRepo);
    expect(result).toEqual([{ repo: 'Repo4', count: 0 }]);
  });
});
