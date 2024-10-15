import { useEffect, useState } from 'react';
import { StatsCardProps } from '@/types';
import { Card, CardTitle, CardDescription } from '../ui/card';

function StatsCard({ title, count }: StatsCardProps) {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const duration = 3000; // duration of the animation in milliseconds
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.max(Math.floor(progress * count), 0); // Ensure count is never negative

      setDisplayCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [count]);

  return (
    <Card>
      <div className='flex flex-row justify-between items-center p-6'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{displayCount}</CardDescription>
      </div>
    </Card>
  );
}

export default StatsCard;
