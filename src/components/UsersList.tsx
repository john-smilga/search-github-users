import { useQuery } from '@apollo/client';
import { GET_TOP_USERS_WITH_MOST_REPOS } from '@/queries';
import { TopUsersResult } from '@/types';
import { Button } from './ui/button';
import { ListLoading } from './Loading';

type UsersListProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const UsersList = ({ userName, setUserName }: UsersListProps) => {
  const { loading, error, data } = useQuery<TopUsersResult>(
    GET_TOP_USERS_WITH_MOST_REPOS
  );

  if (loading) return <ListLoading />;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>No data</div>;

  const { edges: users } = data.search;

  return (
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
  );
};
export default UsersList;
