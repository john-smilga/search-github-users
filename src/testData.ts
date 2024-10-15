import { Repository } from './types';

export const repositories: Repository[] = [
  {
    name: 'Repo1',
    description: 'This is the first repository',
    stargazerCount: 150,
    forkCount: 30,
    url: 'https://github.com/user/repo1',
    languages: {
      edges: [
        { node: { name: 'JavaScript' }, size: 5000 },
        { node: { name: 'TypeScript' }, size: 3000 },
      ],
    },
  },
  {
    name: 'Repo2',
    description: 'This is the second repository',
    stargazerCount: 200,
    forkCount: 50,
    url: 'https://github.com/user/repo2',
    languages: {
      edges: [
        { node: { name: 'Python' }, size: 7000 },
        { node: { name: 'Java' }, size: 4000 },
      ],
    },
  },
];
