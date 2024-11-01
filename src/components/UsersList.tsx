import { useQuery } from '@apollo/client';
import { GET_USERS } from '@/queries';
import { UsersResult } from '@/types';
import { Button } from './ui/button';
import { ListLoading } from './Loading';
import { useState } from 'react';
import PaginationButtons from './PaginationButtons';

type UsersListProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const UsersList = ({ userName, setUserName }: UsersListProps) => {
  const [cursor, setCursor] = useState<string | null>(null);
  const [, setPrevCursor] = useState<string | null>(null);
  const [isForward, setIsForward] = useState(true); // Add this state to track direction

  const { loading, error, data, fetchMore } = useQuery<UsersResult>(GET_USERS, {
    variables: isForward
      ? {
          first: 25,
          after: cursor,
          last: null,
          before: null,
        }
      : {
          first: null,
          after: null,
          last: 25,
          before: cursor,
        },
  });

  if (loading) return <ListLoading />;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>No data</div>;

  const { edges: users, pageInfo } = data.search;

  return (
    <div>
      <h2 className='text-lg font-semibold mb-4'>Top Picks</h2>
      <div className='flex gap-2 mb-8 flex-wrap'>
        {users.map(({ node }) => {
          return (
            <Button
              size='sm'
              variant={node.login === userName ? 'secondary' : 'outline'}
              key={node.login}
              onClick={() => setUserName(node.login)}
            >
              {node.login}
            </Button>
          );
        })}
      </div>
      <PaginationButtons
        pageInfo={pageInfo}
        setCursor={setCursor}
        setPrevCursor={setPrevCursor}
        fetchMore={fetchMore}
        setIsForward={setIsForward}
      />
    </div>
  );
};

export default UsersList;
