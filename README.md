# Search Github Users

![Gif](https://github.com/john-smilga/search-github-users/blob/main/demo.gif)

## App Description

Users can be searched by entering their username in the search form or by clicking on one of the buttons in the users list component. The users list component also has pagination, allowing the user to look for more username suggestions by clicking the next or previous buttons. In the graph components, the application calculates and displays the "most starred repos", "most forked repos", and "most used languages".

## Production URL

You can access the production version of the app [here](https://search-github-users-react-ts-graphql.netlify.app/)

## Local Setup

To run the app locally, follow these steps:

- Clone the repository and navigate to the project directory.
- Install the dependencies:

  ```sh
  npm install
  ```

- Create a .env file in the root of the project and add your GitHub Access Token:

```sh
VITE_GITHUB_TOKEN=your_github_access_token
```

- Start the development server:

```sh
npm run dev
```

- If you can't be bothered with the local setup, you can just utilize the production URL provided above.

## Overview

This application is built using React and TypeScript, leveraging GraphQL for efficient data fetching from the GitHub API. Styling is handled with TailwindCSS, ensuring a utility-first approach to design. The project does not use any dedicated state management library, as state is managed by passing props from parent to child components, and Apollo Client is utilized for managing local and remote data.

## Project Breakdown

#### GitHub API Usage

I chose to use the GitHub API because, it returns a wealth of data. This allows for the incorporation of more features in the app and enables the development of a more complex project from both TypeScript and React perspectives.

#### State Management

I did not use any state management solutions, as the app is structured to only require passing props from parent to child components. If the need for more features arises, RTK or Zustand would be my preferred options. Their setup time is comparable to the Context API, but they are significantly more performant and provide a robust API as more features are added.

#### Typescript

I created a corresponding type for each query to catch bugs at build time. This ensures that any discrepancies between the query structure and the expected data types are identified early, improving the reliability and maintainability of the code.

#### Tests

For testing, I used Vitest and React Testing Library

```sh
npm run test
```
