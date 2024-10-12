import { ApolloClient, InMemoryCache } from '@apollo/client';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

const client = new ApolloClient({
  uri: GITHUB_GRAPHQL_API,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export default client;
