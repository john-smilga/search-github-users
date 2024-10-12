import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingSkeleton() {
  return (
    <div>
      <Skeleton className='h-[194px] w-[544px] rounded mb-4' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-2 mb-8'>
        <Skeleton className='w-[266px] h-[70px] rounded' />
        <Skeleton className='w-[266px] h-[70px] rounded' />
        <Skeleton className='w-[266px] h-[70px] rounded' />
        <Skeleton className='w-[266px] h-[70px] rounded' />
      </div>
    </div>
  );
}
