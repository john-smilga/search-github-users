import { Skeleton } from '@/components/ui/skeleton';

export function UserLoading() {
  return (
    <div>
      <Skeleton className='h-[194px] w-full lg:w-1/2 mb-8 rounded ' />
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 mb-8'>
        <Skeleton className=' h-[70px] rounded' />
        <Skeleton className=' h-[70px] rounded' />
        <Skeleton className=' h-[70px] rounded' />
        <Skeleton className=' h-[70px] rounded' />
      </div>
    </div>
  );
}

export function ListLoading() {
  const skeletonArray = Array.from({ length: 25 });

  return (
    <div>
      <h2 className='text-lg font-semibold mb-4'>Top Picks</h2>
      <div className='flex gap-2 mb-8 flex-wrap'>
        {skeletonArray.map((_, index) => (
          <Skeleton key={index} className='w-[92.72px] h-[32px] rounded ' />
        ))}
      </div>
      <div className='flex gap-2 mb-8'>
        <Skeleton className='w-[92.72px] h-[36px] rounded ' />
        <Skeleton className='w-[92.72px] h-[36px] rounded ' />
      </div>
    </div>
  );
}
