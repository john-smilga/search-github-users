import { useQuery } from '@apollo/client';
import { GET_USER } from '../queries';
import { User } from '../types';
import StatsContainer from './StatsContainer';
import UserCard from './UserCard';
import UsedLanguages from './charts/UsedLanguages';
import ForkedRepos from './charts/ForkedRepos';
import PopularRepos from './charts/PopularRepos';
import LoadingSkeleton from './LoadingSkeleton';

type UserComponentProps = {
  login: string;
};

const UserComponent = ({ login }: UserComponentProps) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login },
  });

  if (loading) return <LoadingSkeleton />;
  if (error) return <h2 className='text-xl '>User Not Found.</h2>;

  const userData: User = data.user;

  return (
    <div>
      <UserCard
        avatarUrl={userData.avatarUrl}
        name={userData.name}
        bio={userData.bio}
        url={userData.url}
      />
      <StatsContainer
        totalRepos={userData.repositories.totalCount}
        followers={userData.followers.totalCount}
        following={userData.following.totalCount}
        gists={userData.gists.totalCount}
      />
      {userData.repositories.totalCount > 0 && (
        <div className='grid md:grid-cols-2 gap-4'>
          <UsedLanguages repositories={userData.repositories.nodes} />
          <PopularRepos repositories={userData.repositories.nodes} />
          <ForkedRepos repositories={userData.repositories.nodes} />
        </div>
      )}
    </div>
  );
};

export default UserComponent;
