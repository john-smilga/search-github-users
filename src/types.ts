export type UsersResult = {
  search: {
    edges: {
      node: {
        login: string;
        repositories: {
          totalCount: number;
        };
      };
    }[];
    pageInfo: {
      endCursor: string | null;
      startCursor: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};

export type PaginationButtonsProps = {
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
  setIsForward: React.Dispatch<React.SetStateAction<boolean>>;
  setCursor: React.Dispatch<React.SetStateAction<string | null>>;
  setPrevCursor: React.Dispatch<React.SetStateAction<string | null>>;
  fetchMore: (options: {
    variables: {
      first: number | null;
      last: number | null;
      after: string | null;
      before: string | null;
    };
    updateQuery: (
      prev: UsersResult, // Changed from any
      { fetchMoreResult }: { fetchMoreResult: UsersResult } // Changed from any
    ) => UsersResult; // Added return type
  }) => void;
};

export type LanguageEdge = {
  node: {
    name: string;
  };
  size: number;
};

export type Repository = {
  name: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  url: string;
  languages: {
    edges: LanguageEdge[];
  };
};

export type User = {
  name: string;
  avatarUrl: string;
  bio: string;
  url: string;
  repositories: {
    totalCount: number;
    nodes: Repository[];
  };
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  gists: {
    totalCount: number;
  };
};
export type UserData = {
  user: User;
};

export type StatsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

export type StatsCardProps = {
  title: string;
  count: number;
};

export type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};
