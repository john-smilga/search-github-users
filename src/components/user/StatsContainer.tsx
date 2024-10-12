import { StatsContainerProps } from '@/types';
import StatsCard from './StatsCard';

const StatsContainer = (props: StatsContainerProps) => {
  const { totalRepos, followers, following, gists } = props;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8 '>
      <StatsCard title='Total Repositories' count={totalRepos} />
      <StatsCard title='Followers' count={followers} />
      <StatsCard title='Following' count={following} />
      <StatsCard title='Gists' count={gists} />
    </div>
  );
};
export default StatsContainer;
