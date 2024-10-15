import { useQuery } from '@apollo/client';
import { GET_USER } from '@/queries';
import { UserData } from '@/types';
import StatsContainer from './StatsContainer';
import UserCard from './UserCard';
import UsedLanguages from '@/components/charts/UsedLanguages';
import ForkedRepos from '@/components/charts/ForkedRepos';
import PopularRepos from '@/components/charts/PopularRepos';
import { UserLoading } from '@/components/Loading';

type UserProfileProps = {
  login: string;
};

const UserProfile = ({ login }: UserProfileProps) => {
  const { loading, error, data } = useQuery<UserData>(GET_USER, {
    variables: { login },
  });

  if (loading) return <UserLoading />;
  if (error) return <h2 className='text-xl'>{error.message}</h2>;
  if (!data) return <h2 className='text-xl'>User Not Found.</h2>;

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className='grid md:grid-cols-2 gap-4'>
          <UsedLanguages repositories={repositories.nodes} />
          <PopularRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
