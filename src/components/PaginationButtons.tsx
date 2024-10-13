import { Button } from './ui/button';
import { PaginationButtonsProps } from '@/types';

const PaginationButtons = ({
  pageInfo,
  setCursor,
  setPrevCursor,
  fetchMore,
}: PaginationButtonsProps) => {
  const handleNextPage = () => {
    if (pageInfo.hasNextPage) {
      setPrevCursor(pageInfo.startCursor);
      setCursor(pageInfo.endCursor);
      fetchMore({
        variables: { after: pageInfo.endCursor },
      });
    }
  };

  const handlePrevPage = () => {
    if (pageInfo.hasPreviousPage) {
      setCursor(pageInfo.startCursor);
      fetchMore({
        variables: { before: pageInfo.startCursor },
      });
    }
  };

  return (
    <div className='flex gap-2 mb-8'>
      {pageInfo.hasPreviousPage && (
        <Button onClick={handlePrevPage}>Previous Page</Button>
      )}
      {pageInfo.hasNextPage && (
        <Button onClick={handleNextPage}>Next Page</Button>
      )}
    </div>
  );
};

export default PaginationButtons;
