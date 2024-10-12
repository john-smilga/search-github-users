import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// HTTP link
const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

// Combine error link and HTTP link
const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
