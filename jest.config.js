module.exports = {
  roots: ['<rootDir>/src/__tests__'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};