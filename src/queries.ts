import { gql } from '@apollo/client';

export const GET_USER = gql`
  query ($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      bio
      url
      repositories(first: 100) {
        totalCount
        nodes {
          name
          description
          stargazerCount
          forkCount
          url
          languages(first: 5) {
            edges {
              node {
                name
              }
              size
            }
          }
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      gists {
        totalCount
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetTopUsers($first: Int, $last: Int, $after: String, $before: String) {
    search(
      query: "type:user"
      type: USER
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      edges {
        node {
          ... on User {
            login
            repositories {
              totalCount
            }
          }
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
