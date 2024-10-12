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

export const GET_TOP_USERS_WITH_MOST_REPOS = gql`
  query {
    search(query: "type:user", type: USER, first: 25) {
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
    }
  }
`;
