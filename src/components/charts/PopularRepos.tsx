import { type Repository } from '@/types';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { calculateMostStarredRepos } from '@/utils';
const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepos(repositories);

  const chartConfig = {
    repo: {
      label: 'Repository',
      color: '#e11c47',
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'>Popular Repos</h2>
      <ChartContainer config={chartConfig} className='h-100 w-full'>
        <BarChart accessibilityLayer data={popularRepos}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='repo'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey='stars' />
          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar dataKey='stars' fill='var(--color-repo)' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
export default PopularRepos;
