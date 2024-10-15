import { describe, it, expect } from 'vitest';
import { calculatePopularLanguages } from '../utils';
import { repositories } from '../testData';

describe('calculatePopularLanguages', () => {
  it('should calculate the correct number of popular languages', () => {
    const result = calculatePopularLanguages(repositories);
    expect(result).toEqual([
      { language: 'JavaScript', count: 1 },
      {
        language: 'TypeScript',
        count: 1,
      },
      { language: 'Python', count: 1 },
      { language: 'Java', count: 1 },
    ]);
  });

  it('should handle an empty list of repositories', () => {
    const result = calculatePopularLanguages([]);
    expect(result).toEqual([]);
  });

  it('should handle repositories with no languages', () => {
    const emptyLanguagesRepo = [
      {
        name: 'Repo3',
        description: 'This is a repository with no languages',
        stargazerCount: 50,
        forkCount: 10,
        url: 'https://github.com/user/repo3',
        languages: {
          edges: [],
        },
      },
    ];
    const result = calculatePopularLanguages(emptyLanguagesRepo);
    expect(result).toEqual([]);
  });
});
